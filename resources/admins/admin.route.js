const express = require("express");

const authorize = require("../../middlewares/auth.middleware");
const admin = require("../../middlewares/admin.middleware");
const adminController = require("./admin.controller");

const router = express.Router();

router.post("/register-lab", authorize, admin, adminController.registerLab);
router.post("/register-doctor", authorize, admin, adminController.registerDoctor);
router.post("/register-organization", authorize, admin, adminController.registerOrganization);
router.get("/labs", authorize, admin, adminController.labLists);
router.get("/organizations", authorize, admin, adminController.organizationLists);
router.get("/doctors", authorize, admin, adminController.doctorLists);

module.exports = router;
