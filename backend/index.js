require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const dataBase = require("./Db/Db.js");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/auth.js");
const prebookRouter = require("./routes/preBook.js");
const userRouter = require("./routes/users.js");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/prebook", prebookRouter);

app.use((err, req, res, next) => {
  console.log("Error caught by middleware:", err);
  const Errorstatus = err.status || 500;
  const Errormessage = err.message || "Some error has detected";
  return res.status(Errorstatus).json({
    status: Errorstatus,
    message: Errormessage,
    success: false,
    stack: err.stack,
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("server started");
  dataBase();
});
