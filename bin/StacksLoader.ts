import * as cdk from "aws-cdk-lib";
import { StarterStack } from "../stacks/StarterStack/StarterStack";
import { getStarterConfig } from "../utils/starterutils/ReadStarterConfig";

export function deployStarterStack(app: cdk.App, stackName: string) {
    let config = getStarterConfig(stackName);
    new StarterStack(app, getStackName(config), config, {
        env: { account: config.Common.AWS_ACCOUNT, region: config.Common.AWS_REGION },
    });
}


function getStackName(config: any): string {
    return config.StackName
}