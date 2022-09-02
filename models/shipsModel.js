const mongoose = require('mongoose')

const ShipsSchema = new mongoose.Schema({
  ships: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('shipsModel', ShipsSchema)