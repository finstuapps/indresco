import {
  JaypieInfrastructureStack,
  JaypieWebDeploymentBucket,
} from "@jaypie/constructs";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export class InfrastructureStack extends JaypieInfrastructureStack {
  constructor(scope: Construct, id: string, props: cdk.StackProps = {}) {
    super(scope, id, props);

    new JaypieWebDeploymentBucket(this, "DeploymentBucket", {
      // * host is not needed if CDK_ENV_WEB_SUBDOMAIN and CDK_ENV_WEB_HOSTED_ZONE or CDK_ENV_HOSTED_ZONE
      // * zone is not needed if CDK_ENV_WEB_HOSTED_ZONE or CDK_ENV_HOSTED_ZONE
    });
  }
}
