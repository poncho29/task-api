const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

const getAll = async (req, res, next) => {
  try {
    const users = await models.User.findAll();

    res.status(200).json({
      msg: 'ok',
      users
    })
  } catch (error) {
    next(error);
  }
}

const create = async (req, res, next) => {
  try {
    const { body } = req;

    const newUser = await models.User.create(body)

    res.status(200).json({
      msg: 'ok',
      user: newUser
    })
  } catch (error) {
    next(error);
  }
}

const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await models.User.findByPk(id);

    if (!user) throw boom.notFound('User not found');

    res.status(200).json({
      msg: 'ok',
      user
    })
  } catch (error) {
    next(error);
  }
}

const update = async (req, res, next) => {
  try {
    const { body } =  req;
    const { id } = req.params;

    const user = await models.User.findByPk(id);

    if (!user) throw boom.notFound('User not found');

    const uptUser = await user.update(body)

    res.status(200).json({
      msg: 'ok',
      user: uptUser
    })
  } catch (error) {
    next(error);
  }
}

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await models.User.findByPk(id);

    if (!user) throw boom.notFound('User not found');

    await user.destroy();

    res.status(200).json({
      msg: 'ok',
      id
    })
  } catch (error) {
    next(error);
  }
}

module.exports = { getAll, create, getOne, update, remove }
