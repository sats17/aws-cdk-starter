import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { BuildConfig } from "../../utils/starterutils/StarterConfigInterface";

export class StarterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, buildConfig: BuildConfig, props?: cdk.StackProps) {
    super(scope, id, props);
      // let starter_lambda = new lambda.Function(this, "starter-lambda", {
      //   functionName: "cdk_starter_lambda",
      //   runtime: lambda.Runtime.NODEJS_14_X,
      //   handler: 'index.handler',
      //   code: lambda.Code.fromInline("Hello from cdk starter lambda")
      //   }
      // );
    }
}
