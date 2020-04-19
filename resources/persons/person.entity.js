const mongoose = require("mongoose");

const personEntity = new mongoose.Schema({
  category: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  dateOfBirth: { type: String },
  nationalId: { type: String },
  landlineNumber: { type: Number },
  mobileNumber: [{ type: Number }],
  emailId: { type: String },
  address: { type: String },
  country: { type: String },
  state: { type: String },
  area: { type: String },
  referral: { type: String, require: true },
  fileNumber: { type: String },
  samples: [{ type: String, require: true }],
  miscellaneousInformation: {
    hasHistoryOfForeignTravel: { type: Boolean },
    travelledCountry: { type: String },
    returnedDate: { type: String },
  },
  labId: { type: String, require: true },
  emergencyContact: [
    {
      relation: { type: String },
      mobileNumber: { type: Number },
    },
  ],
});

const persons = mongoose.model("persons", personEntity);
module.exports = persons;
