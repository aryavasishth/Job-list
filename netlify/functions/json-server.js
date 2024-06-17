const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(__dirname + '/jobs.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

exports.handler = (event, context) => {
  return new Promise((resolve, reject) => {
    server.handle(event, context, (err, res) => {
      if (err) {
        reject({
          statusCode: 500,
          body: JSON.stringify({ error: 'Server error' }),
        });
      } else {
        resolve({
          statusCode: 200,
          body: JSON.stringify(res),
        });
      }
    });
  });
};
