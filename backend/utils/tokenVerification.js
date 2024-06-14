const jwt = require("jsonwebtoken");
const createError = require("./createError");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return next(createError(401, "You are not authenticated"));
  }
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      return res.json({ message: "Token verification failed" });
    }
    req.user = user;
    next();
  });
};
const verifyResetPassword = (req, res, next) => {
  const token = req.params.token; // Extract token from URL parameter
  if (!token) {
    return res.status(401).json({ error: " Try once again using new Link" });
  }
  jwt.verify(token, process.env.JWT, (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ error: "Expired link , Try again using new Link" });
    }
    console.log(decodedToken)
    req.user = decodedToken
    next();
  });
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (!req.params.id || !req.user) {
      return next(
        createError(
          400,
          "Invalid request parameters: ID or user information missing"
        )
      );
    }
    next();
  });
};
const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (!req.user ||!req.user?.user.isAdmin){
      return next(createError(403, "Access denied: User is not an admin"));
    }
    next();
  });
};


module.exports = { verifyToken, verifyUser, verifyResetPassword,verifyAdmin };
