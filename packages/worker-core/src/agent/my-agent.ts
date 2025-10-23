import { google } from "@ai-sdk/google";
import { Agent } from "@mastra/core/agent";
import { test } from "../shared/test";

export const myAgent = new Agent({
  instructions: async () => {
    await test();
    return `Hello`;
  },
  model: google("gemini-2.0-flash-lite"),
  name: "My agent",
});
