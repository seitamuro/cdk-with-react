import { Duration } from "aws-cdk-lib";
import * as cognito from "aws-cdk-lib/aws-cognito";
import { Construct } from "constructs";

export class Auth extends Construct {

  readonly userPool: cognito.UserPool
  readonly userPoolClient: cognito.UserPoolClient

  constructor(scope: Construct, id: string) {
    super(scope, id);

    const userPool = new cognito.UserPool(this, "UserPool", {
      selfSignUpEnabled: true,
      signInAliases: { username: false, email: true },
      passwordPolicy: {
        requireUppercase: true,
        requireSymbols: true,
        requireDigits: true,
        minLength: 8,
      }
    });

    const client = userPool.addClient("UserPoolClient", {
      idTokenValidity: Duration.days(1),
    })

    this.userPool = userPool;
    this.userPoolClient = client;
  }
}