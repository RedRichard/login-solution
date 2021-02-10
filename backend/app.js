const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  seedDB = require("./dbSeeds"),
  bodyParser = require("body-parser"),
  passport = require("passport"),
  cors = require("cors");

// Mongoose config and connection to database:
mongoose.connect("mongodb://localhost/login_solution", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Seed DB
seedDB();

// Set up CORS
app.use(cors());

// Passport
app.use(passport.initialize());
app.use(passport.session());
require("./passport");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route variables
const userRoutes = require("./routes/users"),
  dashboardRoutes = require("./routes/dashboard");

app.use("/", userRoutes);
app.use("/", passport.authenticate("jwt", { session: false }), dashboardRoutes);

app.listen(process.env.PORT || 9000, function () {
  console.log("Backend working on port: " + (process.env.PORT || 9000));
});
