const express = require('express');
const routerTask = require('./tasks.route');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/tasks', routerTask);
}

module.exports = routerApi;
