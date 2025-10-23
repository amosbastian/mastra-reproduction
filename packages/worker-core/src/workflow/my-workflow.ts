import { RuntimeContext } from "@mastra/core/runtime-context";
import { createStep, createWorkflow } from "@mastra/core/workflows";
import { execa } from "execa";
import { z } from "zod";
import { test } from "../shared/test";
import { generatePresignedUrlInternal } from "../shared/test-2";
import { myTool } from "../tool/my-tool";

const runtimeContext = new RuntimeContext();

const myInputSchema = z.object({
  pageId: z.uuid(),
});

export const myStep1 = createStep({
  description: "My step",
  execute: async () => {
    const presignedUrl = await generatePresignedUrlInternal("my-key");
    console.log("Presigned URL:", presignedUrl);
    await execa("echo", ["Hello, World!"]);
    await test();
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
      suspend: () => Promise.resolve(),
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
