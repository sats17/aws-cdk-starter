#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { deployStarterStack } from './StacksLoader';

/**
 * Use -c variables from cdk commands, to get additional variables.
 */
const app = new cdk.App();

deployStarterStack(app, "StarterStack");



