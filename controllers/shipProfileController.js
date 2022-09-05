const shipProfile = require("../models/shipProfileModel");

module.exports = {
  getUserProfile: (req, res) => {
    res.render("shipProfile.ejs");
  },

  postShip: async (req, res) => {
    try {
      await shipProfile.findOneAndUpdate(
        { userId: req.body.userId },
        { shipName: req.body.shipName, shipType: req.body.shipType },
        { new: true, upsert: true }
      );
      console.log("ship created");
    } catch (err) {
      console.log(err);
    }
    res.redirect("/launch");
  },
};
