const Joi = require('joi');

const id = Joi.number().integer();
const title = Joi.string().max(100);
const status = Joi.number().integer();
const description = Joi.string();
const userId = Joi.number().integer();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createTaskSchema = Joi.object({
  title: title.required(),
  status: status,
  description: description,
  userId: userId.required(),
})

const updateTaskSchema = Joi.object({
  title: title,
  status: status,
  description: description,
  userId: userId
})

const getTaskSchema = Joi.object({
  id: id.required()
})

const queryTaskSchema = Joi.object({
  limit,
  offset
})

module.exports = {
  createTaskSchema,
  updateTaskSchema,
  getTaskSchema,
  queryTaskSchema
}
