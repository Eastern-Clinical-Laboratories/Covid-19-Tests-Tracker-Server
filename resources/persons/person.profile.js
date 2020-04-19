const personProfile = {
  registerPersonDtoToEntity :{
    "category": "category",
    "firstName": "firstName",
    "lastName": "lastName",
    "dateOfBirth": "dateOfBirth",
    "nationalId": "nationalId",
    "landlineNumber": "landlineNumber",
    "mobileNumber[]": "mobileNumber[]",
    "emailId": "emailId",
    "address": "address",
    "country": "country",
    "state": "state",
    "area": "area",
    "referral": "referral",
    "fileNumber": "fileNumber",
    "miscellaneousInformation.hasHistoryOfForeignTravel": "miscellaneousInformation.hasHistoryOfForeignTravel",
    "miscellaneousInformation.travelledCountry": "miscellaneousInformation.travelledCountry",
    "miscellaneousInformation.returnedDate": "miscellaneousInformation.returnedDate",
    "emergencyContact[].relation": "emergencyContact[].relation",
    "emergencyContact[].mobileNumber" : "emergencyContact[].mobileNumber"
  }
}

module.exports = personProfile;