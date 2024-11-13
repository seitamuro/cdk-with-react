#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import 'source-map-support/register';
import { WebApplicationStack } from '../lib/web-application-stack';

const app = new cdk.App();
new WebApplicationStack(app, 'WebApplicationStack', {});
