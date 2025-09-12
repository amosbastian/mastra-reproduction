import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema/index.js";

const client = new pg.Pool({
  connectionString: process.env["DATABASE_URL"],
});

await client.connect();

export const db = drizzle(client, {
  schema,
});
