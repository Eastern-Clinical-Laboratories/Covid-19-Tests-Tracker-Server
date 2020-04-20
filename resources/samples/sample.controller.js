const sampleService = require("./sample.service");
const httpStatusCodes = require("http-status-codes");

const samplesController = {
  updateSample: async (req, res) => {
    try {
      await sampleService.updateSample(req.params.sampleId, req.body);
      return res.status(httpStatusCodes.OK).json({});
    } catch (err) {
      return res.status(httpStatusCodes.BAD_REQUEST).json({
        error: err.message,
      });
    }
  },
  getSampleById: async(req, res) =>{
    try {
      const sample = await sampleService.getSampleById(req.params.sampleId);
      return res.status(httpStatusCodes.OK).json(sample);
    } catch (err) {
      return res.status(httpStatusCodes.BAD_REQUEST).json({
        error: err.message,
      });
    }
  }
};


module.exports = samplesController;