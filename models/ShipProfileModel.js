const mongoose = require("mongoose");

const shipProfileSchema = new mongoose.Schema({
  shipName: {
    type: String,
    required: true,
  },
  shipType: {
    type: String,
    required: true,
  },
  userId: {
    type: ObjectID,
    required: true,
  },
});

module.exports = mongoose.model("shipProfileModel", shipProfileSchema);
