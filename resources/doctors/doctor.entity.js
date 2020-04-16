const mongoose = require("mongoose");

const doctorEntity = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
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
    enum: ["Active", "InActive"],
    default: "Active",
  },
});

const doctor = mongoose.model("doctors", doctorEntity);
module.exports = doctor;
