const mailer = require("../helpers/mailer.js")
const resetTemplate = require("../templates/resetTemplate.js")

exports.forgotten = async (req, res) => {
  const recip = req.body.email

  try {
    const template = resetTemplate("https://wilders.co/fr/")

    const info = await mailer(recip, template)

    console.log(info)

    res.sendStatus(200)
  } catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
}
