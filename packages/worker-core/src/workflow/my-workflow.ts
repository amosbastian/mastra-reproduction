import { db } from "@acme/db";
import { user } from "@acme/db/schema";
import { createStep, createWorkflow } from "@mastra/core/workflows";
import { z } from "zod";

const myInputSchema = z.object({
  pageId: z.uuid(),
});

export const myStep1 = createStep({
  description: "My step",
  execute: async () => {
    console.log(await db.select().from(user));
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
  .then(myStep1)
  .commit();
