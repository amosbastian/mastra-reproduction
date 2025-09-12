import { Memory } from "@mastra/memory";
import { PgVector } from "@mastra/pg";
import { storage } from "./storage.js";

export const memory = new Memory({
  options: {
    lastMessages: 10,
    semanticRecall: {
      messageRange: 2,
      topK: 3,
    },
  },
  storage,
  vector: new PgVector({
    connectionString: process.env.DATABASE_URL as string,
  }),
});
