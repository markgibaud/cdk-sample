#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdksampleStack } from '../lib/cdksample-stack';

const app = new cdk.App();
new CdksampleStack(app, 'CdksampleStack');
