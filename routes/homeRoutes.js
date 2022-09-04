const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const homeController = require("../controllers/homeController");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
//BASIC RENDER ROUTES
router.get("/", homeController.getIndex);
// router.get("/launch", homeController.getLaunch);

//USER AUTHENTICATION ROUTES
router.post("/signup", authController.postSignup);
router.get("/signup", authController.getSignup);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);

// LAUNCH PAGE DATA ROUTES

// USER PROFILE DATA ROUTES

module.exports = router;
