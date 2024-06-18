const router = require("express").Router();

const {
  forgotPassword,
  resetPassword,
  getUserData,
} = require("../controllers/user");
const {
  verifyResetPassword,
  verifyAdmin
} = require("../utils/tokenVerification");

router.get("/getuserdata",verifyAdmin, getUserData);

router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:token", verifyResetPassword, resetPassword);

module.exports = router;
