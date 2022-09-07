const shipProfile = require("../models/ShipProfileModel");

module.exports = {
  getLaunch: async (req, res) => {
    try {
      const shipType = await shipProfile.find({ userId: req.user._id });
      // console.log(shipType);
      res.render("launch.ejs", {
        title: "Launch",
        loggedIn: req.user ? true : false,
        shipType: shipType[0].shipType,
      });
    } catch (err) {
      res.redirect(req.session.returnTo || "/shipProfile");
      console.log("Use has no ship profile, Redirecting");
    }
  },
};
