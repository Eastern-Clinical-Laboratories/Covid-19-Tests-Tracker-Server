const users = require("../resources/users/user.entity");

module.exports = async (req, res, next) => {
  try {
    const decodedUser = req.token.data;
    const user = await users.findOne({ _id: decodedUser._id });
    if (!user) {
      res.status(401).end();
    }
    req.currentUser = user;
    return next();
  } catch (e) {
    return res.json(e).status(500);
  }
};
