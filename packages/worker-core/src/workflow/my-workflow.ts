import { generatePresignedUrl } from "@acme/cloudflare";
import { RuntimeContext } from "@mastra/core/runtime-context";
import { createStep, createWorkflow } from "@mastra/core/workflows";
import { z } from "zod";
import { myTool } from "../tool/my-tool.js";

const runtimeContext = new RuntimeContext();

const myInputSchema = z.object({
  pageId: z.uuid(),
});

export const myStep1 = createStep({
  description: "My step",
  execute: async ({ inputData }) => {
    const presignedUrl = await generatePresignedUrl("my-key");
    console.log("Presigned URL:", presignedUrl);
  },
  id: "my-step",
  inputSchema: myInputSchema,
  outputSchema: z.void(),
});

export const myStep2 = createStep({
  description: "My step",
  execute: async () => {
    await myTool.execute({
      context: {
        user: "User",
      },
      runtimeContext,
    });
  },
  id: "my-step",
  inputSchema: z.void(),
  outputSchema: z.void(),
});

export const myWorkflow = createWorkflow({
  description: "My workflow",
  id: "my-workflow",
  inputSchema: myInputSchema,
  outputSchema: z.void(),
})
  .then(myStep1)
  .then(myStep2)
  .commit();
