const db = {
  userData: [
    {
      id: 1,
      email: "test@test.com",
      password: "$2a$10$ExrmQjmwsDI/TCj.71Mh9eKSVydlSUgVnyZf1L9zdoZEhawe21Tgm",
      userName: "test",
    },
  ],
  err: null,
};

db.FindId = (userId, callback) => {
  user = db.userData.find((user) => user.id === userId);
  let err = null;
  if (!user) {
    err = "Not found";
  }
  callback(user, err);
};

db.FindOne = (userData, callback) => {
  user = db.userData.find(
    (user) =>
      user.email === userData.email && user.password === userData.password
  );
  let err = null;
  if (!user) {
    err = "Not found";
  }
  callback(user, err);
};

module.exports = db;
