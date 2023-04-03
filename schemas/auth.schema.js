const Joi = require('joi');

// const email = Joi.string().email();
const username = Joi.string().email();
const password = Joi.string();
const token = Joi.string();
const newPassword = Joi.string();

const loginSchema = Joi.object({
  username: username.required(),
  password: password.required()
})

const recoverySchema = Joi.object({
  // email: email.required()
  username: username.required(),
})

const changePasswordSchema = Joi.object({
  token: token.required(),
  newPassword: newPassword.required(),
})

module.exports = { loginSchema, recoverySchema, changePasswordSchema }
