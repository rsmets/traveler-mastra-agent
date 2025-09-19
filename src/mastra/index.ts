import { Mastra } from "@mastra/core";
import { LibSQLStore } from "@mastra/libsql";
import { inboxTravelSearchAgent } from "./agents/inboxTravelSearch";
import { gmailAgent } from "./agents/gmail";
import { PinoLogger } from "@mastra/loggers";

export const mastra = new Mastra({
  agents: { gmailAgent, inboxTravelSearchAgent },
  storage: new LibSQLStore({
    url: "file:../mastra.db",
  }),
  logger: new PinoLogger({
    name: "Mastra",
    level: "info",
  }),
});
