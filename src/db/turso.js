import { createClient } from "@libsql/client";

export const turso = new Client({
  url: "libsql://hydro-deratech.aws-us-east-1.turso.io",
  authToken: import.meta.env.VITE_TURSO_TOKEN
});
