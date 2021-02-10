const passport = require("passport"),
  LocalStrategy = require("passport-local"),
  bcrypt = require("bcrypt"),
  User = require("./models/user"),
  JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

// Local Strategy
const optsLocalStrategy = {
  usernameField: "username",
  passwordField: "password",
};

passport.use(
  "login",
  new LocalStrategy(optsLocalStrategy, async (username, password, done) => {
    try {
      const user = await User.findOne({ username });

      if (!user) {
        return done(null, false, { message: "User not found" });
      }

      const validate = await user.checkPassword(password);

      if (!validate) {
        return done(null, false, { message: "Wrong password" });
      }

      return done(null, user, { message: "Logged in Successfully" });
    } catch (err) {
      return done(err);
    }
  })
);

// JWT strategy config
const optsJwt = {
  secretOrKey: "login-solution-secret",
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("JWT"),
};

passport.use(
  new JwtStrategy(optsJwt, async (token, done) => {
    try {
      return done(null, token.username);
    } catch (error) {
      done(error);
    }
  })
);
