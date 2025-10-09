import { db } from "@acme/db";
import { user } from "@acme/db/schema";
import { eq } from "drizzle-orm";

export async function test() {
  const selectedUser = await db.select().from(user).where(eq(user.id, "123"));
  console.log("Selected user:", selectedUser);
}
