const mongoose = require("mongoose");
const sampleEntity = new mongoose.Schema({
  test: {
    type: String,
    enum: ["rapid", "pcr"],
    default: "rapid",
  },
  priority: {
    type: String,
    enum: ["high", "medium", "low"],
    default: "medium",
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
    enum: ["awaitingcollection", "testpending", "tested"],
    default: "awaitingcollection",
  },
  sampleType: {
    type: String,
    enum: ["throatswab", "blood", "serum", "plasma"],
    default: 'blood'
  },
});

const samples = mongoose.model("samples", sampleEntity);
module.exports = samples;
