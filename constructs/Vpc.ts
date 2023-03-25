import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from "constructs";

/**
 * Example shows how to import existing VPC
 */
export class Vpc extends Construct {
    public readonly importedVpc: ec2.IVpc;

    constructor(scope: Construct, id: string, vpcId: string, privateSubnetIds: string[]) {
        super(scope, id);

        this.importedVpc = ec2.Vpc.fromVpcAttributes(this, id, {
            vpcId: vpcId,
            availabilityZones: cdk.Fn.getAzs(),
            privateSubnetIds: privateSubnetIds
        });
    }
}