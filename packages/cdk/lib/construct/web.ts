import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { NodejsBuild } from 'deploy-time-build';

export interface WebProps {
  apiEndpointUrl: string
}

export class Web extends Construct {

  readonly destinationBucket: Bucket

  constructor(scope: Construct, id: string, props: WebProps) {
    super(scope, id);

    this.destinationBucket = new Bucket(this, "WebBucket", {
      publicReadAccess: true,
      blockPublicAccess: {
        blockPublicAcls: false,
        blockPublicPolicy: false,
        ignorePublicAcls: false,
        restrictPublicBuckets: false
      }
    })

    new NodejsBuild(this, "BuildWeb", {
      assets: [
        {
          path: "../../",
          exclude: [
            "node_modules",
            "dist",
            "build",
            ".git",
            ".gitignore",
            ".prettierignore",
            ".prettierrc.json",
            "*.md",
            "setup-env.sh",
            "node_modules",
            "packages/cdk/**/*",
            "!packages/cdk/cdk.json",
            "packages/web/dist",
            "packages/web/node_modules", 
          ]
        }
      ],
      destinationBucket: this.destinationBucket,
      outputSourceDirectory: "./packages/web/dist",
      buildCommands: ["npm ci", "npm run web:build"],
      buildEnvironment: {
        VITE_API_ENDPOINT: props.apiEndpointUrl
      }
    })
  }
}