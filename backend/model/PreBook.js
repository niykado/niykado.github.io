const mongoose = require("mongoose");


const PreBook = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
 name: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
},
{ timestamps: true });

module.exports = mongoose.model("PreBook", PreBook);
