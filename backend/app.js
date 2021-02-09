const express = require("express"),
  app = express(),
  mockupDB = require("./mockupDB"),
  bodyParser = require("body-parser"),
  passport = require("passport"),
  cors = require("cors");

// Set up CORS
app.use(cors());

// Passport
app.use(passport.initialize());
app.use(passport.session());
require("./passport");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route variables
const userRoutes = require("./routes/users");

app.use("/", userRoutes);

app.listen(process.env.PORT || 9000, function () {
  console.log("Backend working on port: " + (process.env.PORT || 9000));
  mockupDB.FindOne(
    {
      email: "test@test.com",
      password: "$2a$10$ExrmQjmwsDI/TCj.71Mh9eKSVydlSUgVnyZf1L9zdoZEhawe21Tgm",
    },
    (user, err) => console.log("Usuario: " + user.email)
  );
  mockupDB.FindId(2, (user, err) => console.log("usuario: " + err));
});
