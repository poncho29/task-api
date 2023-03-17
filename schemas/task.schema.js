const Joi = require('joi');

const id = Joi.number().integer();
const title = Joi.string().max(100);
const status = Joi.number().integer();
const description = Joi.string();

const createTaskSchema = Joi.object({
  title: title.required(),
  status: status,
  description: description
})

const updateTaskSchema = Joi.object({
  title: title,
  status: status,
  description: description
})

const getTaskSchema = Joi.object({
  id: id.required()
})

module.exports = { createTaskSchema, updateTaskSchema, getTaskSchema }
