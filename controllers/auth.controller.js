const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');

const { config } = require('../config');
const { models } = require('../libs/sequelize');
const { sendMail } = require('../utils/mails/sendMail');

const login = async (req, res, next) => {
  try {
    const user = req.user;

    const payload = {
      sub: user.id,
    }

    const token = jwt.sign(payload, config.jwtSecret);

    res.json({
      user,
      token
    });
  } catch (error) {
    next(error);
  }
}

const sendRecovery = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await models.User.findOne({ where: { email }});

    if (!user) {
      throw boom.unauthorized('unauthorized')
    }

    // Generate link
    const payload = { sub: user.id };
    const token = jwt.sign(payload, config.jwtSecret, {expiresIn: '15min'});
    const link = `http://mFrontend.com/recovery?token=${token}`;

    // Save link in db
    await user.update({ recoveryToken: token});

    const mail = {
      from: `<${config.userEmail}>`, // sender address
      to: `${user.email}`, // list of receivers
      subject: "Email para recuperar contraseña", // Subject line
      // text: "Hello world?", // plain text body
      html: `<b>Click para recuperar contraseña 👉 ${link} </b>`, // html body
    };

    const result = await sendMail(mail);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = { login, sendRecovery }
