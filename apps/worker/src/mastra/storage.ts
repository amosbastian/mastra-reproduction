import { PostgresStore } from "@mastra/pg";

export const storage = new PostgresStore({
  connectionString: process.env.DATABASE_URL as string,
  schemaName: "mastra",
});
