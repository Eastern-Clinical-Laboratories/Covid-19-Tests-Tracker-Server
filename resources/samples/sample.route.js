const express = require("express");

const sampleController = require('./sample.controller');
const authorize = require("../../middlewares/auth.middleware");

const router = express.Router();

router.get('/:sampleId', authorize, sampleController.getSampleById);
router.put('/updateSample/:sampleId', authorize, sampleController.updateSample);

module.exports = router;