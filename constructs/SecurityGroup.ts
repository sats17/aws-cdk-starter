import { Construct } from "constructs";
import * as ec2 from 'aws-cdk-lib/aws-ec2';


/*
* Example shows how to import existing security group
*/
export class SecurityGroup extends Construct {
    public readonly importedSecurityGroup: ec2.ISecurityGroup;
    constructor(scope: Construct, id: string, securityGroupId: string) {
        super(scope, id);
        this.importedSecurityGroup = ec2.SecurityGroup.fromSecurityGroupId(this , id , securityGroupId);
    }
}