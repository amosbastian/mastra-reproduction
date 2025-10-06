import { Mastra } from "@mastra/core/mastra";
import "dotenv/config";
import { db } from "@acme/db";
import { myWorkflow } from "@acme/worker-core";
import cron from "node-cron";
import { storage } from "./storage.js";

export const mastra = new Mastra({
  agents: {},
  bundler: {
    externals: ["canvas", "re2", "@acme/worker-core"],
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
