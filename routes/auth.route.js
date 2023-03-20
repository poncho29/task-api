const { Router } = require('express');
const passport = require('passport');

const { login, sendRecovery } = require('../controllers/auth.controller');

const router = Router();

router.post(
  '/login',
  passport.authenticate('local', {session: false}),
  login
)

router.post('/recovery', sendRecovery);

module.exports = router;
