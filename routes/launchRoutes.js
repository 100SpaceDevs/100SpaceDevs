const express = require("express");
const router = express.Router();
const launchController = require("../controllers/launchController");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, launchController.getLaunch);

module.exports = router;
