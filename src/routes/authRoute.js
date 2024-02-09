const express = require('express')
const router = express.Router()
const authController = require('../controller/authController')
const authenticate = require('../middlewares/authenticate')

router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/me', authenticate, authController.getMe)
router.get('/user', authController.getAllUser)

module.exports = router