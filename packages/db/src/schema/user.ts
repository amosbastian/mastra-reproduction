import { sql } from "drizzle-orm";
import { boolean, pgTable, text, uniqueIndex, vector } from "drizzle-orm/pg-core";
import { id, timestamps } from "../sql.js";

export const user = pgTable(
  "user",
  {
    email: text("email").$type<`${string}@${string}`>().notNull(),
    emailVerified: boolean("email_verified").default(false),
    embedding: vector("embedding", { dimensions: 1536 }), // Embedding based on the name of the industry
    id: id(),
    image: text("image"),
    name: text("name"),
    referrer: text("referrer"),
    ...timestamps,
  },
  (t) => [uniqueIndex("email_idx").on(sql`lower(${t.email})`)],
);
