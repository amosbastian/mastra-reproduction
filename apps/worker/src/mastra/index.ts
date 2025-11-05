import { Mastra } from "@mastra/core/mastra";
import "dotenv/config";
import { myWorkflow } from "@acme/worker-core/workflow";

export const mastra = new Mastra({
  bundler: {
    externals: ["@acme/worker-core"],
  },
  workflows: {
    myWorkflow,
  },
});
