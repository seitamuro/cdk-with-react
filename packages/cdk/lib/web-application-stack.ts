import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { Api } from './construct/api';
import { Auth } from './construct/auth';
import { Web } from './construct/web';

export class WebApplicationStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const auth = new Auth(this, 'AuthStack');
    const api = new Api(this, 'ApiStack');
    const web = new Web(this, 'WebStack', {
      apiEndpointUrl: api.api.apiEndpoint
    });

    new CfnOutput(this, 'WebUi', {
      value: web.destinationBucket.bucketWebsiteUrl
    })
    new CfnOutput(this, 'ApiEndpoint', {
      value: api.api.apiEndpoint
    })
    new CfnOutput(this, 'UserPoolId', {
      value: auth.userPool.userPoolId
    })
    new CfnOutput(this, 'UserPoolClientId', {
      value: auth.userPoolClient.userPoolClientId
    }
    )
  }
}