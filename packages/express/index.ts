import serverlessExpress from "@codegenie/serverless-express";
import app from "./src/app.js";

export const handler = serverlessExpress({ app });

if (process.env.NODE_ENV === "development") {
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Development server running on http://localhost:${port}`);
  });
}