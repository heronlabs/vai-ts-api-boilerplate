import 'reflect-metadata';

import {NestFactory} from '@nestjs/core';
import serverlessExpress from '@vendia/serverless-express';
import {Callback, Context, Handler} from 'aws-lambda';

import {ApiBootstrap} from './application/api/api-bootstrap';

let server: Handler;

async function bootstrap() {
  const app = await NestFactory.create(ApiBootstrap);

  await app.init();

  return serverlessExpress({
    app: app.getHttpAdapter().getInstance(),
  }).handler;
}

export const handler: Handler = async (
  event: unknown,
  context: Context,
  callback: Callback
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
