// const boom = require('@hapi/boom');

const getAll = async (req, res, next) => {
  try {
    res.status(200).json({
      msg: 'ok'
    })
  } catch (error) {
    next(error);
  }
}

const create = async (req, res, next) => {
  try {
    const { body } = req.body;

    res.status(200).json({
      msg: 'ok',
      user: body
    })
  } catch (error) {
    next(error);
  }
}

const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;

    res.status(200).json({
      msg: 'ok',
      user: id
    })
  } catch (error) {
    next(error);
  }
}

const update = async (req, res, next) => {
  try {
    const { id } = req.params;

    res.status(200).json({
      msg: 'ok',
      user: id
    })
  } catch (error) {
    next(error);
  }
}

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;

    res.status(200).json({
      msg: 'ok',
      id
    })
  } catch (error) {
    next(error);
  }
}

module.exports = { getAll, create, getOne, update, remove }
