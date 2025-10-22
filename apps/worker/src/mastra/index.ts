import { Mastra } from "@mastra/core/mastra";
import "dotenv/config";
import { myAgent } from "@acme/worker-core/agent";
import { myWorkflow } from "@acme/worker-core/workflow";
import { storage } from "./storage.js";

export const mastra = new Mastra({
  agents: {
    myAgent,
  },
  bundler: {
    externals: ["execa", "@acme/db"],
  },
  storage,
  workflows: {
    myWorkflow,
  },
});

// cron.schedule("* * * * *", async () => {
//   const users = await db.query.user.findMany();

//   console.log(users);
// });
