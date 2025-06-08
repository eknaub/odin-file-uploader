const bcrypt = require("bcryptjs");
const passport = require("passport");
const prisma = require("../config/database");

const authController = {
  signUp: async (req, res, next) => {
    try {
      const { email, password, confirmPassword, first_name, last_name } =
        req.body;

      if (password !== confirmPassword) {
        return res.render("sign-up", { error: "Passwords do not match." });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await prisma.users.create({
        data: {
          email: email,
          password: hashedPassword,
          first_name: first_name,
          last_name: last_name,
        },
      });

      res.redirect("/");
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  logIn: (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.render("log-in", { error: info.message });
      }
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        return res.render("index", { user: req.user });
      });
    })(req, res, next);
  },

  logOut: async (req, res, next) => {
    try {
      await req.logout();
      res.redirect("/");
    } catch (err) {
      console.error("Logout error:", err);
      next(err);
    }
  },

  getSignUpForm: (req, res) => {
    res.render("sign-up", {
      error: null,
    });
  },

  getHomePage: async (req, res) => {
    res.render("index", { user: req.user });
  },

  getLogInForm: (req, res) => {
    res.render("log-in", {
      error: null,
    });
  },
};

module.exports = authController;
