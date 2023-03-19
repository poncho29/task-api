const { Router } = require('express');

const validatorHandler = require('../middlewares/validator.handle');
const { getAll, create, getOne, update, remove} = require('../controllers/tasks.controller');
const { createTaskSchema, getTaskSchema, updateTaskSchema, queryTaskSchema } = require('../schemas/task.schema');

const router = Router();

router.get(
  '/',
  validatorHandler(queryTaskSchema, 'params'),
  getAll
)

router.post(
  '/',
  validatorHandler(createTaskSchema, 'body'),
  create
)

router.get(
  '/:id',
  validatorHandler(getTaskSchema, 'params'),
  getOne
)

router.put(
  '/:id',
  validatorHandler(getTaskSchema, 'params'),
  validatorHandler(updateTaskSchema, 'body'),
  update
)

router.delete(
  '/:id',
  validatorHandler(getTaskSchema, 'params'),
  remove
)

module.exports = router
