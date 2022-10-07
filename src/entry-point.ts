import 'reflect-metadata';

import {INestApplication} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';

import {ApiBootstrap} from './application/api/api-bootstrap';

('use strict');

interface Server {
  app: INestApplication;
  port: number;
}

export const server = async (): Promise<Server> => {
  const app = await NestFactory.create(ApiBootstrap);

  return {app, port: 3000};
};

server().then((server: Server) => {
  const app = server.app;
  const port = server.port;

  return app.listen(port);
});
