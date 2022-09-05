const passport = require("passport");
const validator = require("validator");
const User = require("../models/UserModel");

// requests user information
// checking if you are logged
// if logged in
// redirect to /launch
// load launch.ejs
// if not logged in,
// redirect to /login
// load login.ejs
// checkLogin
exports.getLogin = (req, res) => {
  if (req.user) {
    console.log(`${req.user} is logged in`);
    return res.redirect("/launch");
  }
  res.render("login", {
    title: "Login",
  });
};

// if user exists, redirect /login
// if user doesn't exist,
// redirect to /signup
exports.getSignup = (req, res) => {
  if (req.user) {
    return res.redirect("/login");
  }
  res.render("signup", {
    title: "Create Account",
  });
};

// create user
// accepts signup information
// checks if the user information exists in the database
// if it already exists,
// redirect to /login
// if it does not exist,
// send a post request to the database with the information entered on the signup page
// redirect to /launch with the user information
exports.postSignup = (req, res, next) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (!validator.isLength(req.body.password, { min: 8 }))
    validationErrors.push({
      msg: "Password must be at least 8 characters long",
    });
  if (req.body.password !== req.body.confirmPassword)
    validationErrors.push({ msg: "Passwords do not match" });

  if (validationErrors.length) {
    req.flash("errors", validationErrors);
    return res.redirect("../signup");
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });

  User.findOne(
    { $or: [{ email: req.body.email }, { userName: req.body.userName }] },
    (err, existingUser) => {
      if (err) {
        return next(err);
      }
      if (existingUser) {
        req.flash("errors", {
          msg: "Account with that email address or username already exists.",
        });
        return res.redirect("../signup");
      }
      user.save((err) => {
        if (err) {
          return next(err);
        }
        req.logIn(user, (err) => {
          if (err) {
            return next(err);
          }
          res.redirect("/launch");
        });
      });
    }
  );
};

// sends login information
// checks if information is valid
// if it is valid
// redirects /launch
// if not, redirects to /login
// send a message that the username or password is incorrect
exports.postLogin = (req, res, next) => {
  const validationErrors = [];

  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (validator.isEmpty(req.body.password))
    validationErrors.push({ msg: "Password cannot be blank." });

  if (validationErrors.length) {
    req.flash("errors", validationErrors);
    return res.redirect("/login");
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log(`!user`);
      req.flash("errors", info);
      console.log(`info`, info);
      return res.redirect("/login");
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", { msg: "Success! You are logged in." });
      res.redirect(req.session.returnTo || "/");
    });
  })(req, res, next);
};

// destroys the current user session
// redirect /
// destroys current session information
exports.logout = (req, res) => {
  req.logout(() => {
    console.log(`${req.user} has logged out.`);
  });
  req.session.destroy((err) => {
    if (err)
      console.log("Error : Failed to destroy the session during logout.", err);
    req.user = null;
    res.redirect("/");
  });
};
