const adminService = require("./admin.service"),
  httpStatusCodes = require("http-status-codes");

const adminController = {
  registerLab: async (req, res) => {
    try {
      console.log(req);
      const registeredUser = await adminService.registerLab(req.body);
      return res.status(httpStatusCodes.OK).json(registeredUser);
    } catch (err) {
      return res.status(httpStatusCodes.BAD_REQUEST).json({
        error: err.message,
      });
    }
  },
  registerOrganization: async (req, res) => {
    try {
      console.log(req);
      const registeredOrganization = await adminService.registerOrganization(
        req.body
      );
      return res.status(httpStatusCodes.OK).json(registeredOrganization);
    } catch (err) {
      return res.status(httpStatusCodes.BAD_REQUEST).json({
        error: err.message,
      });
    }
  },
  registerDoctor: async (req, res) => {
    try {
      console.log(req);
      const registeredDoctor = await adminService.registerDoctor(req.body);
      return res.status(httpStatusCodes.OK).json(registeredDoctor);
    } catch (err) {
      return res.status(httpStatusCodes.BAD_REQUEST).json({
        error: err.message,
      });
    }
  },
  labLists: async (req, res) => {
    try {
      const labLists = await adminService.labLists();
      return res.status(httpStatusCodes.OK).json(labLists);
    } catch (err) {
      return res.status(httpStatusCodes.BAD_REQUEST).json({
        error: err.message,
      });
    }
  },
  organizationLists: async (req, res) => {
    try {
      const organizationList = await adminService.organizationLists();
      return res.status(httpStatusCodes.OK).json(organizationList);
    } catch (err) {
      return res.status(httpStatusCodes.BAD_REQUEST).json({
        error: err.message,
      });
    }
  },
  doctorLists: async (req, res) => {
    try {
      const doctorList = await adminService.doctorLists();
      return res.status(httpStatusCodes.OK).json(doctorList);
    } catch (err) {
      return res.status(httpStatusCodes.BAD_REQUEST).json({
        error: err.message,
      });
    }
  },
};

module.exports = adminController;
