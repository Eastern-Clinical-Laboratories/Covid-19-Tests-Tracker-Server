const personService = require("./person.service");
const httpStatusCodes = require("http-status-codes");

const personController = {
  registerNew: async (req, res) => {
    try {
      const registeredPerson = await personService.registerNewPerson(
        req.currentUser,
        req.body
      );
      return res.status(httpStatusCodes.OK).json(registeredPerson);
    } catch (err) {
      return res.status(httpStatusCodes.BAD_REQUEST).json({
        error: err.message,
      });
    }
  },
  readPersonSamples: async (req, res) =>{
    try {
      const personSamples = await personService.readPersonSamples(
        req.params.personId,
        req.currentUser
      );
      return res.status(httpStatusCodes.OK).json(personSamples);
    } catch (err) {
      return res.status(httpStatusCodes.BAD_REQUEST).json({
        error: err.message,
      });
    }
  },
  readPersons: async (req, res) => {
    try {
      const registeredPersons = await personService.readPersons(
        req.currentUser
      );
      return res.status(httpStatusCodes.OK).json(registeredPersons);
    } catch (err) {
      return res.status(httpStatusCodes.BAD_REQUEST).json({
        error: err.message,
      });
    }
  },
  searchPersons: async (req, res) => {
    try {
      const searchedPersons = await personService.searchPerson(
        req.currentUser,
        req.query.keyword
      );
      return res.status(httpStatusCodes.OK).json(searchedPersons);
    } catch (err) {
      return res.status(httpStatusCodes.BAD_REQUEST).json({
        error: err.message,
      });
    }
  }
};

module.exports = personController;
