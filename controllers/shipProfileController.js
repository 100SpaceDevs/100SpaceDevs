module.exports = {
  getUserProfile: (req, res) => {
    res.render("shipProfile.ejs");
  },

  postShip: (req, res) => {
    const userId = console.log(req.user);
    return res.send("OK");
  },

  putShip: (req, res) => {},
};
