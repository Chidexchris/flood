// netlify/functions/sendFloodSms.cjs  (CommonJS)

const axios = require("axios");
const { createClient } = require("@libsql/client");
const dotenv = require("dotenv");
const admin = require("firebase-admin");

dotenv.config();

// ---------- INIT TURSO ----------
const turso = createClient({
  url: "libsql://hydro-deratech.aws-us-east-1.turso.io",
  authToken: process.env.TURSO_TOKEN
});

// ---------- INIT FIREBASE ----------
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://earlyfloodalertsystem-default-rtdb.firebaseio.com"
  });
}

// ---------- CONFIG ----------
const THRESHOLD = 40;
const TERMII_API_KEY = process.env.TERMII_API_KEY;
const TERMII_SENDER_ID = "FLOODALERT";


// ---------- GET LATEST WATER LEVEL ----------
async function getLatestWaterLevel() {
  const dbRef = admin.database().ref("flood_alert/station1");
  const snapshot = await dbRef.get();
  const data = snapshot.val();

  console.log("RAW Firebase water_level object:", data);

  if (!data || typeof data !== "object") {
    console.log("Firebase returned invalid structure");
    return NaN;
  }

  // Extract all timestamps
  const keys = Object.keys(data);
  if (!keys.length) {
    console.log("No water_level entries found");
    return NaN;
  }

  // Sort timestamps descending → latest entry first
  const latestKey = keys.sort().reverse()[0];
  const latestEntry = data[latestKey];

  console.log("Latest key:", latestKey);
  console.log("Latest entry:", latestEntry);

  const level = Number(latestEntry.water_level);

  return Number.isFinite(level) ? level : NaN;
}


// ---------- MAIN FUNCTION ----------
exports.handler = async () => {
  try {
    // 1️⃣ Get latest water level
    const waterLevel = await getLatestWaterLevel();
    console.log("Parsed latest water level:", waterLevel);

    if (isNaN(waterLevel)) {
      return { statusCode: 400, body: "Invalid water level value" };
    }

    // 2️⃣ Check threshold
    if (waterLevel < THRESHOLD) {
      console.log(`Water level normal (${waterLevel} < ${THRESHOLD})`);
      return { statusCode: 200, body: "Water level normal, no SMS sent." };
    }

    console.log(`⚠️ ALERT! Water level ${waterLevel} >= ${THRESHOLD}`);

    // 3️⃣ Fetch subscriber phone numbers
    const result = await turso.execute("SELECT phone FROM phone_numbers");
    const numbers = result.rows.map(r => r.phone).filter(Boolean);

    console.log("Subscribers found:", numbers.length);

    if (!numbers.length) {
      return { statusCode: 200, body: "No subscribers found." };
    }

    // 4️⃣ Compose message
    const message = `⚠️ FLOOD ALERT! Water level is ${waterLevel} cm. Stay alert!`;

    // 5️⃣ Send SMS to all
    const sendTasks = numbers.map(phone =>
      axios.post("https://api.ng.termii.com/api/sms/send", {
        api_key: TERMII_API_KEY,
        to: phone,
        from: TERMII_SENDER_ID,
        sms: message,
        type: "plain",
        channel: "generic"
      })
      .then(() => ({ phone, ok: true }))
      .catch(err => ({ phone, ok: false, err: err.message }))
    );

    const results = await Promise.all(sendTasks);

    const success = results.filter(r => r.ok).length;
    const failed = results.filter(r => !r.ok);

    console.log("SMS final report:", results);

    return {
      statusCode: 200,
      body: `SMS sent: ${success}, failed: ${failed.length}`
    };

  } catch (err) {
    console.error("ERROR in sendFloodSms:", err);
    return { statusCode: 500, body: "Error sending flood SMS." };
  }
};
