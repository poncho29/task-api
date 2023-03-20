const { Router } = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const boom = require('@hapi/boom');
const nodemailer = require('nodemailer');
const { models } = require('../libs/sequelize');

const { config } = require('../config');

const router = Router();

router.post('/login',
  passport.authenticate('local', {session: false}),
  async (req, res, next) => {
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
)

router.post('/recovery',
  async (req, res, next) => {
    try {
      const { body } = req;

      const user = await models.User.findOne({ where: { email: body.email }});

      if (!user) {
        throw boom.unauthorized('unauthorized')
      }

      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        secure: true, // true for 465, false for other ports
        port: 465,
        auth: {
          user: config.userEmail,
          pass: config.passEamil
        }
      });

      await transporter.sendMail({
        from: `Sebastian Menenes" <${config.userEmail}>`, // sender address
        to: `${user.email}`, // list of receivers
        subject: "Este es un correo de prueba XD ✔", // Subject line
        text: "Enviando correos de Node?", // plain text body
        html: "<b>Hello Hello?</b>", // html body
      });

      res.status(200).json({
        msg: 'Mail sent'
      })
    } catch (error) {
      next(error);
    }
  }
)

module.exports = router;
