const mongoose = require("mongoose");
const sampleEntity = new mongoose.Schema({
  test: {
    type: String,
  },
  priority: {
    type: String,
    enum: ["High", "Medium", "Low"],
    default: "Medium",
  },
  collectionDateTime: {
    type: String,
  },
  assertionDateTime: {
    type: String,
  },
  comment: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Awaiting Collection", "Test Pending", "Tested"],
    default: "Awaiting Collection",
  },
  sampleType:{
    type:String,
    enum: ["ThroatSwab", "Blood", "Serum", "Plasma"]
  }
});

const samples = mongoose.model("samples", sampleEntity);
module.exports = samples;
