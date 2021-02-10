const express = require("express"),
  router = express.Router();

// handle dashboard access
router.get("/", (req, res, next) => {
  res.json({
    message: "Authorized",
    user: req.user,
    // token: req.header.JWT,
  });
});

module.exports = router;
