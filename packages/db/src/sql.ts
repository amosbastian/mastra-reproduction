import { sql } from "drizzle-orm";
import { timestamp, uuid } from "drizzle-orm/pg-core";
import { v7 } from "uuid";

export const timestamps = {
  createdAt: timestamp("created_at")
    .notNull()
    .default(sql`now()`),
  updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
};

export const id = () => {
  return uuid("id")
    .primaryKey()
    .notNull()
    .$defaultFn(() => {
      return v7();
    });
};
