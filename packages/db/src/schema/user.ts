import { sql } from "drizzle-orm";
import { boolean, pgTable, text, uniqueIndex } from "drizzle-orm/pg-core";
import { id, timestamps } from "../sql.js";

export const user = pgTable(
  "user",
  {
    email: text("email").$type<`${string}@${string}`>().notNull(),
    emailVerified: boolean("email_verified").default(false),
    id: id(),
    image: text("image"),
    name: text("name"),
    referrer: text("referrer"),
    ...timestamps,
  },
  (t) => [uniqueIndex("email_idx").on(sql`lower(${t.email})`)],
);

