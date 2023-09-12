const nodemailer = require("nodemailer")

const mailer = async (recip, template) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  const mail = {
    from: process.env.SMTP_USER,
    to: recip,
    subject: template.subject,
    html: template.body,
  }

  return transporter.sendMail(mail)
}

module.exports = mailer
