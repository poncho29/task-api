const boom = require('@hapi/boom');

const getAll = async (req, res, next) => {
  try {
    res.json('All tasks');
  } catch (error) {
    next(error);
  }
}

const create = async (req, res, next) => {
  try {
    res.json(req.body);
  } catch (error) {
    next(error);
  }
}

const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) throw boom.notFound('task not found');

    res.json('get task');
  } catch (error) {
    next(error);
  }
}

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) throw boom.notFound('task not found')

    res.json('update task')
  } catch (error) {
    next(error);
  }
}

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) throw boom.notFound('task not found');

    res.json('remove task');
  } catch (error) {
    next(error);
  }
}

module.exports = { getAll, create, getOne, update, remove }
