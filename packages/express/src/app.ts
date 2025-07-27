import { cors, echoRoute, noContentRoute, notFoundRoute } from "jaypie";
import express from "express";
import resourceRouter from "./routes/resource.router.js";

const app = express();

// Built-in Jaypie routes
app.get("/", noContentRoute);
app.use("/_sy/echo", cors(), echoRoute);

// Application routes
app.use("/resource", cors(), resourceRouter);

// Catch-all
app.all("*", notFoundRoute);

export default app;
