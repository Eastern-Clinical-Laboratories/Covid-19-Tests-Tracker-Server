const expressJwt = require("express-jwt");

const getTokenFromHeader = (req) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1];
  }
};

module.exports = expressJwt({
  secret: "c0vib91_z3c5t",
  userProperty: "token", // this is where the next middleware can find the encoded data generated in services/auth:generateToken
  getToken: getTokenFromHeader,
});
