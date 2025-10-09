import { Mastra } from "@mastra/core/mastra";
import "dotenv/config";
import { db } from "@acme/db";
import { myAgent } from "@acme/worker-core/agent";
import { myWorkflow } from "@acme/worker-core/workflow";
import cron from "node-cron";
import { storage } from "./storage.js";

export const mastra = new Mastra({
  agents: {
    myAgent,
  },
  bundler: {
    externals: ["canvas", "re2", "execa"],
  },
  storage,
  workflows: {
    myWorkflow,
  },
});

cron.schedule("* * * * *", async () => {
  const users = await db.query.user.findMany();

  console.log(users);
});
