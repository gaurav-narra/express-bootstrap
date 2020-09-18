const express = require('express');
const pino = require('pino-http')();
const router = require('./router');

const getServer = () => {
  const app = express();

  app.use(express.json());
  app.use(pino);
  app.use('/', router(express.Router()));

  return app;
};

module.exports = {
  getServer,
};
