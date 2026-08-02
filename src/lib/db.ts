import "server-only";

import { neon } from "@neondatabase/serverless";

export function getDatabase() {
  const connectionString = process.env.NEON_DB_CONNECTION;

  if (!connectionString) {
    throw new Error("NEON_DB_CONNECTION is not configured");
  }

  return neon(connectionString);
}
