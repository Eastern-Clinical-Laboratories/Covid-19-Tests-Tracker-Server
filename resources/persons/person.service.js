const mongoose = require("mongoose");
const mapper = require("object-mapper");
const persons = require("./person.entity");
const personProfile = require("./person.profile");
const sampleService = require("../samples/sample.service");

const personService = {
  registerNewPerson: async (currentUser, registerPersonRequest) => {
    console.log(registerPersonRequest.emailId);
    const existingPerson = await persons.findOne({
      email: registerPersonRequest.emailId,
    });
    if (existingPerson) {
      throw Error("Person with same email already existing");
    }

    const personToCreate = mapper(
      registerPersonRequest,
      personProfile.registerPersonDtoToEntity
    );
    console.log(personToCreate);
    personToCreate.labId = currentUser._id;
    const sampleRequests = registerPersonRequest.samples;

    const createdSamples = await sampleService.createSamples(sampleRequests);
    const createdSampleIds = createdSamples.map((s) => s._id);

    personToCreate.samples = createdSampleIds;
    await persons.create(personToCreate);
  },

  readPersons: async (currentUser) => {
    const createdPersons = await persons.find({ labId: currentUser._id });
    return createdPersons;
  },

  readPersonSamples: async (personId, currentUser) => {
    const createdPersons = await persons
      .findOne({
        $and: [{ labId: currentUser._id }, { _id: personId }],
      })
      .populate("samples");
    if(createdPersons){return createdPersons.samples;}
    return null;
  },

  searchPerson: async (currentUser, keyword) => {
    console.log(keyword);
    const searchedPersons = await persons.find({
      $or: [
        { emailId: { $regex: `.*${keyword}.*` } },
        { firstName: { $regex: `.*${keyword}.*` } },
        { lastName: { $regex: `.*${keyword}.*` } },
      ],
      labId: currentUser._id,
    });

    return searchedPersons;
  },
};

module.exports = personService;
