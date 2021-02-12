const mongoose = require("mongoose"),
  User = require("./models/user");

const data = [
  {
    username: "test1",
    password: "test",
  },
  {
    username: "test2",
    password: "test",
  },
];

function seedDB() {
  // Remove all campgrounds
  User.deleteMany({}, (err) => {
    if (err) {
      console.log(err);
    }
    data.forEach((seed) => {
      User.create(seed, (err, user) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Added user: " + seed.username);
        }
      });
    });
    console.log(`${data.length} users created`);
  });
}

module.exports = seedDB;
