import "source-map-support/register.js";
import * as cdk from "aws-cdk-lib";
import { AppStack } from "./lib/cdk-app.js";
import { InfrastructureStack } from "./lib/cdk-infrastructure.js";

const app = new cdk.App();

new InfrastructureStack(app, "InfrastructureStack");

new AppStack(app, "AppStack");
