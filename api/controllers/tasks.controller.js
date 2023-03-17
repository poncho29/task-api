const boom = require('@hapi/boom');

const getAll = async (req, res, next) => {
  try {
    res.status(200).json({
      msg: 'ok',
      users: []
    });
  } catch (error) {
    next(error);
  }
}

const create = async (req, res, next) => {
  try {
    res.status(200).json({
      msg: 'ok',
      user: req.body
    });
  } catch (error) {
    next(error);
  }
}

const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req.body;

    if (!id) throw boom.notFound('task not found');

    res.status(200).json({
      msg: 'ok',
      user: body
    });
  } catch (error) {
    next(error);
  }
}

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req.body;

    if (!id) throw boom.notFound('task not found')

    res.status(200).json({
      msg: 'ok',
      user: body
    });
  } catch (error) {
    next(error);
  }
}

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) throw boom.notFound('task not found');

    res.status(200).json({
      msg: 'ok',
      id
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { getAll, create, getOne, update, remove }