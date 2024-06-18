const UserModel = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const expires =  30 * 60 * 60 * 1000; 


require("dotenv").config();
const signupUser = async (req, res, next) => {
  try {
    const { email, password, ...other } = req.body;
    let oldUser = await UserModel.findOne({ email });
    if (oldUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new UserModel({
      email,
      password: hashedPassword,
      ...other,
    });
    await user.save();
    let payload={
      user:{id:user._id,
        email:user.email,
        prebook:user.prebook,
        username:user.username,
isAdmin:user.isAdmin
      }
    }
  const token=jwt.sign(payload,process.env.JWT,{expiresIn:"4m"})
  
  res
  .cookie("access_token", token,{
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Ensures secure cookies in production
    sameSite: 'None',
    maxAge: expires  // Allows cross-origin requests to include the cookie
  })
  .status(200)
 .json({ token });
   
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({email: req.body.email });

    if (!user) {
      return res.status(404).json({ message: "Username not found" });
    }

    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    let payload={
      user:{id:user._id,
        email:user.email,
        prebook:user.prebook,
        username:user.username,
        isAdmin:user.isAdmin
      }
    }
    const token = jwt.sign(payload, process.env.JWT,{expiresIn:"10h"});
   
    res
      .cookie("access_token", token,{
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Ensures secure cookies in production
        sameSite: 'None' ,
       maxAge: expires 
      })
      .status(200)
      .json({ token });;
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signupUser,
  loginUser,
};
