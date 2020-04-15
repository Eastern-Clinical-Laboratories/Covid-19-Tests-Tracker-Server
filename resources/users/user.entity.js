const mongoose = require("mongoose");

const userEntity = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "lab-user",
  },
});

const user = mongoose.model("users", userEntity);
module.exports = user;
