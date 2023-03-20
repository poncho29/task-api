const nodemailer = require('nodemailer');

const { config } = require('../../config');

const sendMail = async (infoMail) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: true, // true for 465, false for other ports
    port: 465,
    auth: {
      user: config.userEmail,
      pass: config.passEamil
    }
  });

  await transporter.sendMail(infoMail);

  return { message: 'Mail sent' };
}

module.exports = { sendMail };
