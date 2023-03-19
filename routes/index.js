const express = require('express');

const authRouter = require('./auth.route');
const routerTask = require('./tasks.route');
const routerUsers = require('./users.route');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/auth', authRouter);
  router.use('/tasks', routerTask);
  router.use('/users', routerUsers);
}

module.exports = routerApi;
