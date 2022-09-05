module.exports = {
  getLaunch: (req, res) => {
    res.render("launch.ejs", {
      title: "Launch",
      loggedIn: req.user ? true : false,
    });
  },
};
