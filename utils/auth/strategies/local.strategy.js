const bcrypt = require('bcrypt');
const boom = require('@hapi/boom');
const { Strategy } = require('passport-local');

const { models } = require('../../../libs/sequelize');

const LocalStrategy = new Strategy(async (username, password, done) => {
  try {
    const user = await models.User.findOne({ where: { email: username }});

    if (!user) {
      done(boom.unauthorized(), false);
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      done(boom.unauthorized(), false);
    }

    delete user.dataValues.password;

    done(null, user);
  } catch (error) {
    done(error, false)
  }
});

module.exports = LocalStrategy;
