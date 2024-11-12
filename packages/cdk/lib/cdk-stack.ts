import * as cdk from 'aws-cdk-lib';
import * as apigwv2 from 'aws-cdk-lib/aws-apigatewayv2';
import * as apigwv2_integrations from 'aws-cdk-lib/aws-apigatewayv2-integrations';
import * as aws_lambda_nodejs from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const api = new apigwv2.HttpApi(this, 'Api', {
      corsPreflight: {
        allowOrigins: ['*'],
        allowMethods: [apigwv2.CorsHttpMethod.GET],
      }
    });

    const helloLambda = new aws_lambda_nodejs.NodejsFunction(this, 'HelloLambda', {
      entry: 'lambda/hello.ts',
    });

    api.addRoutes({
      path: '/hello',
      methods: [ apigwv2.HttpMethod.GET ],
      integration: new apigwv2_integrations.HttpLambdaIntegration("HelloIntegration",
        helloLambda,
      ),
    })

    new cdk.CfnOutput(this, 'ApiEndpoint', {
      value: api.url!,
    });
  }
}
