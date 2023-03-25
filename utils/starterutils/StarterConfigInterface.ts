export interface BuildConfig {
    readonly StackName: string;
    readonly Environment: string;
    readonly Version: string,
    readonly Build: string;
    readonly Common: Common;
}

export interface Common {
    readonly AWS_REGION: string;
    readonly AWS_ACCOUNT : string;
}


