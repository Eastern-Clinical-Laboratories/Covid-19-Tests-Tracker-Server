const express = require("express");
const isAuth = require("../../middlewares/auth.middleware");
const currentUer = require("../../middlewares/currentuser.middleware");

const router = express.Router();

router.get("/", isAuth, currentUer, async (req, res) => {
  const data = { name: req.currentUser.name, email: req.currentUser.email };
  console.log(data);
  res.send(data);
});

module.exports = router;
