import { neon } from "@neondatabase/serverless";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const connectionString = process.env.NEON_DB_CONNECTION;
if (!connectionString) {
  console.error("NEON_DB_CONNECTION is not configured");
  process.exit(1);
}

const migrationsDirectory = path.join(process.cwd(), "db", "migrations");
const files = (await readdir(migrationsDirectory))
  .filter((file) => file.endsWith(".sql"))
  .sort();
const sql = neon(connectionString);

await sql`CREATE TABLE IF NOT EXISTS schema_migrations (
  filename text PRIMARY KEY,
  applied_at timestamptz NOT NULL DEFAULT now()
)`;

for (const filename of files) {
  const applied = await sql`SELECT 1 FROM schema_migrations WHERE filename = ${filename}`;
  if (applied.length > 0) continue;

  const migration = await readFile(path.join(migrationsDirectory, filename), "utf8");
  const statements = migration
    .split(";")
    .map((statement) => statement.trim())
    .filter(Boolean);
  await sql.transaction([
    ...statements.map((statement) => sql.query(statement)),
    sql`INSERT INTO schema_migrations (filename) VALUES (${filename})`,
  ]);
  console.log(`Applied ${filename}`);
}

console.log("Database migrations are up to date");
