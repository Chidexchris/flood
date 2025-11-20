import { createClient } from "@libsql/client";
import dotenv from "dotenv";

dotenv.config();

const turso = createClient({
  url: "libsql://hydro-deratech.aws-us-east-1.turso.io",
  authToken: process.env.TURSO_TOKEN
});

export const handler = async (event) => {
  try {
    const { phone } = JSON.parse(event.body);

    await turso.execute(
      "INSERT INTO phone_numbers (phone) VALUES (?)",
      [phone]
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Phone number saved!" }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error saving phone number" }),
    };
  }
};
