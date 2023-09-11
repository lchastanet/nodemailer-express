const express = require("express")
const cors = require("cors")

require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors())

const { forgotten } = require("./controllers/mailController.js")

app.use("/mail", forgotten)

app.get("*", (req, res) => {
  res.status(404).send({ message: "Not found !" })
})

module.exports = app
