import { createClient } from "@libsql/client";
import dotenv from "dotenv";

dotenv.config(); // Load .env

const turso = createClient({
  url: "libsql://hydro-deratech.aws-us-east-1.turso.io",
  authToken: process.env.TURSO_TOKEN
});

async function main() {
  await turso.execute(`
    CREATE TABLE IF NOT EXISTS phone_numbers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      phone TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `);

  console.log("✅ Table created successfully!");
}

main();
