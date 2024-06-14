
const mongoose=require("mongoose")
const URL = process.env.URL;

const dataBase = async () => {
  try {
    const base = await mongoose.connect(URL);
    console.log("conneted to the database:", base.connection.port);
  } catch (error) {
    console.log("error:", error);
  }
};

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected");
});
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});
module.exports = dataBase;
