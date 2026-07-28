const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");


// router.get('/registration', (req, res) => {
//  return res.send('Birds home page');
// });

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "gmail",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: 'riemehasan06@gmail.com',
    pass: process.env.SMTP_PASS,
  },
});


router.post("/sendotp", async(req, res) => {
 const {email} = req.body

 if (!email) {
   return res.status(400).json({
        success: false,
        message: "Email is required"
    })
    
 }
});
 

module.exports = router;
