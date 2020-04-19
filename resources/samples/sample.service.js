const mapper = require("object-mapper");
const samples = require("./sample.entity");
const sampleProfile = require("./sample.profile");

const sampleService = {
  createSamples: async (sampleRequests) => {
    const sampleRequestEntities = mapper(
      sampleRequests,
      sampleProfile.sampleListDtoToEntity
    );

    console.log("started to samples person");
    const createdSamples = await samples.insertMany(sampleRequestEntities);
    return createdSamples;
  },
  createSample: async (sampleRequest) => {
    const sampleRequestEntity = mapper(
      sampleRequest,
      sampleProfile.sampleDtoToEntity
    );

    const createdSample = await samples.create(sampleRequestEntity);
    return createdSample;
  },
  updateSample: async (sampleId, updateSampleRequest) => {
    await samples.findByIdAndUpdate(sampleId, {
      status: updateSampleRequest.status,
      comment: updateSampleRequest.comment,
      collectionDateTime: updateSampleRequest.collectionDateTime,
      assertionDateTime: updateSampleRequest.assertionDateTime,
      test: updateSampleRequest.test,
      priority: updateSampleRequest.priority,
    });
  },
};

module.exports = sampleService;
