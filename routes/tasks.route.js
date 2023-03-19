const passport = require('passport');
const { Router } = require('express');

const validatorHandler = require('../middlewares/validator.handle');
const { getAll, create, getOne, update, remove} = require('../controllers/tasks.controller');
const { createTaskSchema, getTaskSchema, updateTaskSchema, queryTaskSchema } = require('../schemas/task.schema');

const router = Router();

router.get(
  '/',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(queryTaskSchema, 'params'),
  getAll
)

router.post(
  '/',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(createTaskSchema, 'body'),
  create
)

router.get(
  '/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getTaskSchema, 'params'),
  getOne
)

router.put(
  '/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getTaskSchema, 'params'),
  validatorHandler(updateTaskSchema, 'body'),
  update
)

router.delete(
  '/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getTaskSchema, 'params'),
  remove
)

module.exports = router
