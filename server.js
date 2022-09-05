const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const connectDB = require("./config/database");
const logger = require("morgan");
const homeRoutes = require("./routes/homeRoutes");
const shipProfileRoutes = require("./routes/shipProfileRoutes");
const shipsRoutes = require("./routes/shipsRoutes");
const launchRoutes = require("./routes/launchRoutes");
const flash = require("express-flash");

// CONFIG PATHS
require("dotenv").config({ path: "./config/.env" });
// Passport config
require("./config/passport")(passport);

connectDB();

app.set("view engine", "ejs"); // tells the browser we will be using ejs to render

app.use(express.static(__dirname + "/public")); // static pages are accessible through the public folder

app.use(express.urlencoded({ extended: true }));

app.use(express.json()); // import the server information as a JSON object

app.use(logger("dev")); // morgan's request handler with a "dev" format

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DB_STRING,
    }),
  })
);

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

//Routes

app.use("/shipProfile", shipProfileRoutes);
app.use("/ships", shipsRoutes);
app.use("/launch", launchRoutes);
app.use("/", homeRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}...`);
});
