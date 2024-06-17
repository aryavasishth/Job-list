const express = require('express');
const serverless = require('serverless-http');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const router = jsonServer.router(path.join(__dirname, 'jobs.json'));
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use('/.netlify/functions/json-server', router);

module.exports.handler = serverless(app);