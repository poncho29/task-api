const Joi = require('joi');

const id = Joi.number().integer();
const fullName = Joi.string().max(255);
const email = Joi.string().email();
const password = Joi.string();

const createUserSchema = Joi.object({
  name: fullName.required(),
  email: email.required(),
  password: password.required()
})

const updateUserSchema = Joi.object({
  name: fullName,
  password: password
})

const getUserSchema = Joi.object({
  id: id.required()
})

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
