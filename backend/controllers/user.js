const UserModel = require("../model/User");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const { link } = require("../routes/auth");

const forgotPassword = async (req, res, next) => {
 try {
  const { email } = req.body;
  const user = await UserModel.findOne({ email });
  console.log(email)
  if (!email) {
    return res.json({ message: "this is an invalid email" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT, {
    expiresIn: "5m",
  });
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.EMAIL_PASS,
  
    },
  });
  var mailOptions = {
    from: process.env.ADMIN_EMAIL,
    to: `${email}`,
    subject: "Reset your password using this link, use before it will  Expire (one minute)",
    text: `https://monumental-narwhal-ceb008.netlify.app/resetpassword/${token}`
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Error occurred in sending email" });
    } else {
      console.log("Email sent:", info.response);
      return res.json({ status: true, message: `Email sent successfully to ${email}` });
    }
  });
 } catch (error) {
  next(error)
 }
};

const resetPassword = async (req, res, next) => {
  try {
    const { password } = req.body;

    const decodedToken = req.user; // Access decoded token directly from req.user

    if (!decodedToken) {
      return res.status(400).json({ error: "Expired link , Try once again" });
    }

    const id = decodedToken.id;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await UserModel.findByIdAndUpdate(id, { password: hashedPassword });

    res.status(200).json({ message: "Password successfully updated" });
  } catch (error) {
    next(error);
  }
};
const getUserData=async(req,res,next)=>{
  
  try {
    const users = await UserModel.find({isAdmin: false }).select('-password')
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
}

module.exports = {

  forgotPassword,
  resetPassword,
  getUserData
};
