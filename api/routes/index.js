const express = require('express');

const routerTask = require('./tasks.route');
const routerUsers = require('./users.route');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/tasks', routerTask);
  router.use('/users', routerUsers);
}

module.exports = routerApi;
