const jsonServer = require('json-server');
const serverless = require('serverless-http');
const path = require('path');

const app = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'jobs.json'));
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(router);

module.exports.handler = serverless(app);