const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const User = require("../models/userSchema");

// router.get('/registration', (req, res) => {
//  return res.send('Birds home page');
// });

// Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: "riemehasan06@gmail.com",
    pass: "eynkoqujdeitwljy",
  },
});
// Nodemailer
// OTP 
router.post("/sendotp", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email is required",
    });
  }
  let otp = otpGenerator.generate(6);
  let existingUser = await User.findOne({ email: email });

  if (!existingUser) {
    let user = await new User({
      email: email,
      otp: otp,
    }).save();
  } else {
    await User.findOneAndUpdate({ email: email }, { otp: otp });
  }

  const info = await transporter.sendMail({
    from: '"xyz company" riemehasan06@gmail.com', // sender address
    to: email, // list of recipients
    subject: "Hello, do you need OTP?", // subject line
    html: `<body style=margin:0;padding:0;background-color:#f4f4f4;font-family:Arial,Helvetica,sans-serif><table cellpadding=0 cellspacing=0 role=presentation style="background-color:#f4f4f4;padding:40px 0"width=100%><tr><td align=center><table cellpadding=0 cellspacing=0 role=presentation style="background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,.08)"width=600><tr><td align=center style=background:#2563eb;padding:30px><h1 style=margin:0;color:#fff;font-size:28px;font-weight:700>Verify Your Account</h1><tr><td style="padding:40px 35px;color:#333"><p style="margin:0 0 15px;font-size:16px">Hello,<p style="margin:0 0 25px;font-size:16px;line-height:24px">Use the One-Time Password (OTP) below to complete your verification.<div style="text-align:center;margin:35px 0"><span style="display:inline-block;background:#f1f5f9;border:2px dashed #2563eb;color:#2563eb;font-size:34px;font-weight:700;letter-spacing:8px;padding:18px 40px;border-radius:8px">{${otp}}</span></div><p style="margin:0 0 15px;font-size:15px;color:#555">This OTP is valid for <strong>5 minutes</strong>.<p style=margin:0;font-size:15px;color:#555>If you didn't request this verification, you can safely ignore this email.<tr><td align=center style="padding:25px;background:#f8fafc;border-top:1px solid #e5e7eb"><p style=margin:0;font-size:13px;color:#777>This is an automated email. Please do not reply.<p style="margin:10px 0 0;font-size:13px;color:#999">© 2026 Company. All rights reserved.</table></table>`, // HTML body
  });

  console.log("Message sent: %s", info.messageId);

  return res.status(200).send("done");
});
// OTP 

// login 
router.post("/login/:email", async (req, res) => {
  const { email, otp } = req.body;

  let existingUser = await User.findOne({ email: email });

  if (!existingUser) {
    return res.status(404).send("User not found");
  }

  console.log(existingUser.otp);

  if (existingUser.isLogin) {
    return res.status(400).send("Please logout first");
  }

  if (!existingUser.otp) {
    return res.status(403).send("You're Fraud");
  }

  if (existingUser.otp == otp) {
    await User.findOneAndUpdate({ email: email }, { otp: "", isLogin: true });
    return res.status(200).send("Successfully login");
  } else {
    return res.status(400).send("Invalid OTP");
  }
});
// login 

// logout 
router.post("/logout", async(req, res)=>{
 const {email} = req.body

 if (!email) {
  res.status(400).json({
    success: false,
    message: "Email is required"
  }) 
 }

 let existingUser = await User.findOne({ email:email })

 if (!existingUser) {
  res.status(400).send("User not found")
 }

 if(!existingUser.isLogin){
  res.status(400).send("You're not logged in")
 }

 await User.findOneAndUpdate({email: email}, {isLogin: false})

 return res.status(200).send("Successfully logged out")

})
// logout 
 
// ========= 
router.get('/registration', async(req,res)=>{
  let user = await new User({
    userName: "Tasin",
    email: "tasin@gmail.com",
    role: "student"
  }).save()

 
})

// ========= 
module.exports = router;