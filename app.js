const mongoose = require("mongoose");
const express = require("express");

const app = express();

const userRoute = require("./resources/users/user.route");
const citizenRoute = require("./resources/citizens/citizen.route");

const isAuth = require("./middlewares/auth.middleware");
const currentUer = require("./middlewares/currentuser.middleware");

const db = require("./config/config").mongoUri;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(isAuth);
// app.use(currentUer);

app.use("/api/users/v1", userRoute);
app.use("/api/citizens/v1", [isAuth, currentUer], citizenRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`App is listening at port ${PORT}`));
