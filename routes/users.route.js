const { Router } = require('express');

const validatorHandler = require('../middlewares/validator.handle');
const { getAll, create, getOne, update, remove } = require('../controllers/users.controller');
const { createUserSchema, getUserSchema, updateUserSchema } = require('../schemas/user.schema');

const router = Router();

router.get('/', getAll);

router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  create
);

router.get(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  getOne
);

router.put(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  update
);

router.delete(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  remove
);

module.exports = router;
