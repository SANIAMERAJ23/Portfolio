
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

console.log(`value is ${process.env.email}`);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/contact", async (req, res) => {
  const { fname, lname, email, subject, message } = req.body;

  console.log("Request body:", req.body);

  if (!fname || !lname || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.email,
        pass: process.env.pass,
      },
    });

    const mailConfig = {
      from: `"${fname} ${lname}" <${email}>`,
      replyTo: email,
      to: process.env.email, 
      subject: subject,
      text: `This message is from ${fname} ${lname}.
             Subject: ${subject}.
             Message: ${message}.
             Sender's Email: ${email}`,
    };

    const info = await transporter.sendMail(mailConfig);
    console.log("Email sent successfully:", info.response);
    res.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error occurred while sending email:", error);
    res
      .status(500)
      .json({ error: "An error occurred while sending the email." });
  }
});

app.listen(8000, () => {
  console.log("Server is running at port 8000");
});



