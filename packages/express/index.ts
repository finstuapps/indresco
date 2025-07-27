import serverlessExpress from "@codegenie/serverless-express";
import { log } from "jaypie";
import app from "./src/app.js";

const DEFAULT_PORT = 8080;

export const handler = serverlessExpress({ app });

if (process.env.NODE_ENV === "development") {
  const port = process.env.PORT || DEFAULT_PORT;
  app.listen(port, () => {
    log.trace(`[index] Development server running on http://localhost:${port}`);
  });
}
