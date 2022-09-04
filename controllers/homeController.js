const passport = require("passport");
const validator = require("validator");
const User = require("../models/UserModel");

exports.getIndex = (req, res) => {
  if (req.user) {
    console.log(`${req.user} is logged in`);
    return res.redirect("/launch");
  }
  res.render("index", {
    title: "100SpaceDevs - An informational SpaceX App",
    loggedIn: req.user ? true : false,
  });
};
