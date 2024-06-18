const router=require("express").Router()
const User=require("../model/User")
const {signupUser,loginUser}=require("../controllers/auth");

router.post("/signup",signupUser)
router.post("/login",loginUser)



module.exports=router