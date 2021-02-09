const passport = require("passport"),
  LocalStrategy = require("passport-local"),
  mockupDB = require("./mockupDB"),
  bcrypt = require("bcrypt"),
  JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

// Local Strategy
const optsLocalStrategy = {
  usernameField: "email",
  passwordField: "password",
};

passport.use(
  new LocalStrategy(optsLocalStrategy, async (email, password, done) => {
    let user = null;
    await mockupDB.FindOne(
      {
        email,
        password,
      },
      (user, err) => {
        if (!user) {
          done({ type: "email", message: "Incorrect user" }, false);
          return;
        }
        if (bcrypt.compareSync(password, user.password)) {
          done(null, {
            id: user.id,
            email: user.email,
            userName: user.userName,
          });
        } else {
          done({ type: "password", message: "Incorrect password" }, false);
        }
      }
    );
  })
);

// JWT strategy config
const optsJwt = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "login-solution-secret",
  issuer: "issuer.login-solution.com",
  audience: "login-solution.com",
};

passport.use(
  new JwtStrategy(optsJwt, (jwt_payload, done) => {
    mockupDB.FindId(jwt_payload, (user, err) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);
