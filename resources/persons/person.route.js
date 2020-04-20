const express = require("express");

const personController = require('./person.controller');
const authorize = require("../../middlewares/auth.middleware");
const currentUser = require("../../middlewares/currentuser.middleware");

const router = express.Router();

router.get('/readPersons', authorize, currentUser, personController.readPersons);
router.get('/searchPersons', authorize, currentUser, personController.searchPersons);
router.post('/registerNewPerson', authorize, currentUser, personController.registerNew);
router.get('/readPersonSamples/:personId', authorize, currentUser, personController.readPersonSamples);

module.exports = router;