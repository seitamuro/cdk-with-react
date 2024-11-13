import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { Api } from './construct/api';
import { Web } from './construct/web';

export class WebApplicationStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const api = new Api(this, 'ApiStack');
    const web = new Web(this, 'WebStack', {
      apiEndpointUrl: api.api.apiEndpoint
    });

    new CfnOutput(this, 'WebUI', {
      value: web.destinationBucket.bucketWebsiteUrl
    })
    new CfnOutput(this, 'ApiEndpointOutput', {
      value: api.api.apiEndpoint
    })
  }
}