import { generatePresignedUrl } from "@acme/cloudflare";
import { createTool } from "@mastra/core/tools";
import { z } from "zod";

export const myTool = createTool({
  description: "My tool",
  execute: async ({ context: { user } }) => {
    const presignedUrl = await generatePresignedUrl("my-key");
    console.log("Presigned URL:", presignedUrl);
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
