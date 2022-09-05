const passport = require("passport");
const validator = require("validator");
const User = require("../models/UserModel");

exports.getIndex = (req, res) => {
  if (req.user) {
    // console.log(`${req.user} is logged in`);
    console.log("This message is from the getIndex function");
    return res.redirect("/launch");
  }
  res.render("index", {
    title: "100SpaceDevs - An informational SpaceX App",
    loggedIn: req.user ? true : false,
  });
};
