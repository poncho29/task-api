const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

const getAll = async (req, res, next) => {
  try {
    const { limit, offset, author, status } = req.query;

    const options = {
      where: {}
    };

    if (limit && offset) {
      options.limit = limit,
      options.offset = offset
    }

    if (author) {
      options.where.userId = author;
    }

    if (status) {
      options.where.status = status;
    }

    if (author && status) {
      options.where = {
        userId: author,
        status
      }
    }

    const tasks = await models.Task.findAll(options);

    res.status(200).json({
      msg: 'ok',
      tasks
    });
  } catch (error) {
    next(error);
  }
}

const create = async (req, res, next) => {
  try {
    const { body } = req;

    const newTask =  await models.Task.create(body);

    res.status(200).json({
      msg: 'ok',
      task: newTask
    });
  } catch (error) {
    next(error);
  }
}

const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await models.Task.findByPk(id);

    if (!task) throw boom.notFound('Task not found');

    res.status(200).json({
      msg: 'ok',
      task: task
    });
  } catch (error) {
    next(error);
  }
}

const update = async (req, res, next) => {
  try {
    const { body } = req;
    const { id } = req.params;

    const task = await models.Task.findByPk(id);

    if (!task) throw boom.notFound('Task not found');

    const uptTask =  await task.update(body);

    res.status(200).json({
      msg: 'ok',
      task: uptTask
    });
  } catch (error) {
    next(error);
  }
}

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await models.Task.findByPk(id);

    if (!task) throw boom.notFound('Task not found');

    await task.destroy()

    res.status(200).json({
      msg: 'ok',
      id
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { getAll, create, getOne, update, remove }
