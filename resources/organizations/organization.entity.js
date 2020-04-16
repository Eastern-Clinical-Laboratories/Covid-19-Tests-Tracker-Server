const mongoose = require("mongoose");

const organizationEntity = new mongoose.Schema({
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
  }
});

const organization = mongoose.model("organizations", organizationEntity);
module.exports = organization;
