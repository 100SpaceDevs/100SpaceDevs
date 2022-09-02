const express = require('express')
const router = express.Router()
const shipsController = require('../controllers/shipsController') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, shipsController.getShips)

router.post('/createShips', shipsController.createShips)

router.put('/markComplete', shipsController.markComplete)

router.put('/markIncomplete', shipsController.markIncomplete)

router.delete('/deleteShips', shipsController.deleteShips)

module.exports = router