const db = {
  userData: [
    {
      id: 1,
      email: "test@test.com",
      password: "$2a$10$nccRFVmMr7Vvve609xTR/eKwjOAlybP2GkUN9uYUWqYnZWeNonf72",
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
