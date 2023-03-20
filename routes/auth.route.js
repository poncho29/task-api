const { Router } = require('express');
const passport = require('passport');

const validatorHandler = require('../middlewares/validator.handle');
const { login, sendRecovery, changePassword } = require('../controllers/auth.controller');
const { loginSchema, recoverySchema, changePasswordSchema } = require('../schemas/auth.schema');

const router = Router();

router.post(
  '/login',
  validatorHandler(loginSchema, 'body'),
  passport.authenticate('local', {session: false}),
  login
)

router.post(
  '/recovery',
  validatorHandler(recoverySchema, 'body'),
  sendRecovery
);

router.post(
  '/change-password',
  validatorHandler(changePasswordSchema, 'body'),
  changePassword
)

module.exports = router;
