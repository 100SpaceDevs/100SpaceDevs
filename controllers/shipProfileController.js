const shipProfile = require("../models/ShipProfileModel");

module.exports = {
  getUserProfile: (req, res) => {
    res.render("shipProfile.ejs", {
      title: "Ship Select",
      loggedIn: req.user ? true : false,
    });
  },

  postShip: async (req, res) => {
    try {
      await shipProfile.findOneAndUpdate(
        { userId: req.user._id },
        { shipName: req.body.shipName, shipType: req.body.shipType },
        { new: true, upsert: true }
      );
      console.log("ship created");
    } catch (err) {
      console.log(err);
    }
    console.log(req.body.shipName, req.body.shipType);
    res.redirect("/launch");
  },
};
