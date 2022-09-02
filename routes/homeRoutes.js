const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController') 
const homeController = require('../controllers/homeController')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)
router.get('/launch',homeController.getLaunch)
// router.post('/login', authController.postLogin)
router.post('/logout', authController.logout)



module.exports = router
