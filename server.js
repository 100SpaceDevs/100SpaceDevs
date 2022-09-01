const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const connectDB = require("./config/database");
const logger = require("morgan");
const homeRoutes = require("./routes/homeRoutes");
require("dotenv").config({ path: "./config/.env" });

connectDB();
// tells the browser we will be using ejs to render
app.set("view engine", "ejs");

// static pages are accessible through the public folderb
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// import the server information as a JSON object
app.use(express.json());
// morgan's request handler with a "dev" format
app.use(logger("dev"));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());
//Routes
app.use("/", homeRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on {${process.env.PORT}}.`);
});
