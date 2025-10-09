import { generatePresignedUrl } from "@acme/cloudflare";
import { db } from "@acme/db";
import { user as userTable } from "@acme/db/schema";
import { createTool } from "@mastra/core/tools";
import { eq } from "drizzle-orm";
import { z } from "zod";

export const myTool = createTool({
  description: "My tool",
  execute: async ({ context: { user } }) => {
    const presignedUrl = await generatePresignedUrl("my-key");
    console.log("Presigned URL:", presignedUrl);
    const selectedUser = await db.select().from(userTable).where(eq(userTable.id, "123"));
    console.log("Selected user:", selectedUser);
    return {
      userId: user,
    };
  },
  id: "Assign user",
  inputSchema: z.object({
    user: z.string().describe("User name"),
  }),
  outputSchema: z.object({
    userId: z.string().describe("The ID of the user"),
  }),
});
