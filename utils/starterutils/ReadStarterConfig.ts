const yaml = require('js-yaml');
import * as fs from 'fs'
import * as path from "path";
import { BuildConfig } from './StarterConfigInterface';

export function getStarterConfig(stack_name: string) {
    let filename = stack_name + ".yml";
    console.log(filename);
    let unparsedEnv = yaml.load(fs.readFileSync(path.resolve("./config/stacks/" + filename), "utf8"));
    if (!unparsedEnv) {
        throw new Error("Config File not found under /config folder: " + filename);
    }
    let config: BuildConfig = {
        StackName: ensureString(unparsedEnv, 'StackName'),
        Environment: ensureString(unparsedEnv, 'Environment'),
        Version: ensureString(unparsedEnv, 'Version'),
        Build: ensureString(unparsedEnv, 'Build'),
        Common: {
            AWS_REGION: ensureString(unparsedEnv['Common'], 'AWS_REGION'),
            AWS_ACCOUNT: ensureString(unparsedEnv['Common'], 'AWS_ACCOUNT')
        }
    }
    console.log("Materialized Starter configuration from config file => \n" + JSON.stringify(config, null, "  "));
    return config;
}

function ensureString(object: { [name: string]: any }, propName: string): string {
    if (!object[propName] || object[propName].trim().length === 0)
        throw new Error(propName + " does not exist or is empty");
    return object[propName];
}

function ensureBoolean(object: { [name: string]: any }, propName: string) {
    if (typeof object[propName] === 'boolean') {
        return object[propName]
    } else {
        throw new Error(propName + " is not valid boolean");
    }
}


