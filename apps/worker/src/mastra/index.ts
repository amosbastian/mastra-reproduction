import { Mastra } from "@mastra/core/mastra";
import "dotenv/config";
import { myAgent } from "@acme/worker-core/agent";
import { myWorkflow } from "@acme/worker-core/workflow";
import Konva from "konva";
import { storage } from "./storage.js";
import "konva/canvas-backend";

const text = new Konva.Text({
  fontFamily: "Arial",
  fontSize: 124,
  text: "Some text",
  width: 300,
});

const textHeight = text.height();

console.log("Text height:", textHeight);

export const mastra = new Mastra({
  agents: {
    myAgent,
  },
  bundler: {
    externals: ["execa"],
  },
  storage,
  workflows: {
    myWorkflow,
  },
});
