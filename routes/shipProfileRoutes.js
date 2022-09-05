const express = require("express");
const router = express.Router();
const shipProfileController = require("../controllers/shipProfileController");

router.get("/", shipProfileController.getUserProfile);

router.post("/", shipProfileController.postShip);

router.put("/", shipProfileController.putShip);

module.exports = router;
