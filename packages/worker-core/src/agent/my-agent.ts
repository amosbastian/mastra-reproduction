import { google } from "@ai-sdk/google";
import { Agent } from "@mastra/core/agent";

export const myAgent = new Agent({
  instructions: async ({ runtimeContext }) => {
    return `Hello`;
  },
  model: google("gemini-2.0-flash-lite"),
  name: "My agent",
});
