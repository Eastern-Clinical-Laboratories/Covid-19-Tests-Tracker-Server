const userService = require("./user.service"),
  httpStatusCodes = require("http-status-codes");

const userController = {
  registerAdmin: async (req, res) => {
    try {
      const registeredUser = await userService.registerAdmin(req.body);
      return res.status(httpStatusCodes.OK).json(registeredUser);
    } catch (err) {
      return res.status(httpStatusCodes.BAD_REQUEST).json({
        error: err.message,
      });
    }
  },

  login: async (req, res) => {
    try {
      const loggedInUser = await userService.login(
        req.body.email,
        req.body.password
      );
      return res.status(httpStatusCodes.OK).json(loggedInUser);
    } catch (err) {
      return res.status(httpStatusCodes.BAD_REQUEST).json({
        error: err.message,
      });
    }
  },
};

module.exports = userController;
