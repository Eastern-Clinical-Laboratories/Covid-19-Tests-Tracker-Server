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
  landline: {
    type: Number,
  },
  mobile: {
    type: Number,
    maxlength: 10,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  area: {
    type: String,
  },
  comments: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  Signature: {
    data: Buffer,
    contentType: String,
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
