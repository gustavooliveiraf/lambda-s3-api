const serverless = require('serverless-http');
const app = require('express')();
const routes = require('./src/routes');

routes(app);

module.exports.lambdaHandler = serverless(app);
// module.exports = app;
