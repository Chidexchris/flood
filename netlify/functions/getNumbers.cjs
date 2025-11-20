import { createClient } from "@libsql/client";
import dotenv from "dotenv";

dotenv.config();

const turso = createClient({
  url: "libsql://hydro-deratech.aws-us-east-1.turso.io",
  authToken: process.env.TURSO_TOKEN
});

export const handler = async () => {
  try {
    const result = await turso.execute("SELECT * FROM phone_numbers");
    return {
      statusCode: 200,
      body: JSON.stringify(result.rows),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error fetching numbers" }),
    };
  }
};
