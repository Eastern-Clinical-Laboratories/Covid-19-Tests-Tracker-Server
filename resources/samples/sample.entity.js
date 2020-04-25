const mongoose = require("mongoose");
const sampleEntity = new mongoose.Schema({
  test: {
    type: String,
    enum: ["COVID_19_ANTIBODY_RAPID_SCREENING_TEST", "COVID_19_DETECTION_BY_PCR"],
    default: "COVID_19_ANTIBODY_RAPID_SCREENING_TEST",
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
