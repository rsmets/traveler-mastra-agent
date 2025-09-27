import { Mastra } from "@mastra/core";
import { LibSQLStore } from "@mastra/libsql";
import { travelAgent } from "./agents/travelAgent";
import { gmailAgent } from "./agents/gmail";
import { PinoLogger } from "@mastra/loggers";
import { webSummarizationAgent } from "./agents/webSummarizationAgent";

export const mastra = new Mastra({
  agents: { gmailAgent, travelAgent, webSummarizationAgent },
  storage: new LibSQLStore({
    url: "file:../mastra.db",
  }),
  logger: new PinoLogger({
    name: "Mastra",
    level: "info",
  }),
});
