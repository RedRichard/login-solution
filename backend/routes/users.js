const express = require("express"),
  router = express.Router(),
  passport = require("passport"),
  jwt = require("jsonwebtoken");

// handle login logic
router.post("/login", (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        message: err.message,
      });
    }

    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }
      const token = jwt.sign(user, "login-solution-secret");

      return res.json({ user, token });
    });
  })(req, res);
});

// router.post("/login", (req, res) => {
//   res.status(200).json({
//     token: "test123",
//   });
// });

module.exports = router;
