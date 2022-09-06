const express = require("express");
const router = express.Router();
const shipProfileController = require("../controllers/shipProfileController");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, shipProfileController.getUserProfile);

router.post("/", ensureAuth, shipProfileController.postShip);

// router.put("/", shipProfileController.putShip);

module.exports = router;
