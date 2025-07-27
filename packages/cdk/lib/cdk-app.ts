import {
  JaypieAppStack,
  JaypieApiGateway,
  JaypieExpressLambda,
  JaypieMongoDbSecret,
  JaypieLambda,
} from "@jaypie/constructs";

import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";

const EXPRESS_LAMBDA_HANDLER = "dist/index.expressLambda";
const LAMBDA_WORKER_HANDLER = "dist/index.lambdaWorker";
const API_HOST = "api.example.com";
const API_ZONE = "example.com";

export class AppStack extends JaypieAppStack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const mongoConnectionString = new JaypieMongoDbSecret(this);

    const expressLambda = new JaypieExpressLambda(this, "expressLambda", {
      code: lambda.Code.fromAsset("../express"),
      handler: EXPRESS_LAMBDA_HANDLER,
      secrets: [mongoConnectionString],
    });

    new JaypieApiGateway(this, "apiGateway", {
      handler: expressLambda,
      host: API_HOST,
      zone: API_ZONE,
    });

    new JaypieLambda(
      this,
      "lambdaWorker",
      {
        code: lambda.Code.fromAsset("../lambda"),
        handler: LAMBDA_WORKER_HANDLER,
        secrets: [mongoConnectionString],
      },
    );
  }
}
