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

app.listen(process.env.PORT || 3000, function () {
  console.log("Backend working on port: " + (process.env.PORT || 3000));
  mockupDB.FindOne(
    {
      email: "test@test.com",
      password: "$2a$10$nccRFVmMr7Vvve609xTR/eKwjOAlybP2GkUN9uYUWqYnZWeNonf72",
    },
    (user, err) => console.log("Usuario: " + user.email)
  );
  mockupDB.FindId(2, (user, err) => console.log("usuario: " + err));
});
