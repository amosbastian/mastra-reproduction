import { generatePresignedUrl } from "@acme/cloudflare";
import { createStep, createWorkflow } from "@mastra/core/workflows";
import { z } from "zod";

const myInputSchema = z.object({
  pageId: z.uuid(),
});

export const myStep = createStep({
  description: "My step",
  execute: async ({ inputData }) => {
    const presignedUrl = await generatePresignedUrl("my-key");
    console.log("Presigned URL:", presignedUrl);
  },
  id: "my-step",
  inputSchema: myInputSchema,
  outputSchema: z.void(),
});

export const myWorkflow = createWorkflow({
  description: "My workflow",
  id: "my-workflow",
  inputSchema: myInputSchema,
  outputSchema: z.void(),
})
  .then(myStep)
  .commit();
