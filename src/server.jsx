const express = require("express")
const router = express.Router()
const cors = require("cors")
const nodemailer = require("nodemailer")

const app = express()

app.use(cors())
app.use(express.json())
app.use("/", router)

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ummer.zaman88@gmail.com",
    pass: "",
  },
})

contactEmail.verify(error => {
  if (error) {
    console.log(error)
  } else {
    console.log("Ready to Send")
  }
})

app.listen(5000, () => console.log("Server Running"))
