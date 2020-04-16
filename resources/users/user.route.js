const express = require('express');
const userController = require('./user.controller');

const router = express.Router();

router.post('/register-admin', userController.registerAdmin);
router.post('/login', userController.login);

module.exports = router;