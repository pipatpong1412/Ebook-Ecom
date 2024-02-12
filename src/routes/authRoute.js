const express = require('express')
const router = express.Router()
const authController = require('../controller/authController')
const authenticate = require('../middlewares/authenticate')

router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/me', authenticate, authController.getMe)
router.get('/user', authController.getAllUser)
router.delete('/user/del/:userId', authController.deleteUser)
router.patch('/user/patch/role/:userId', authController.updateRoleUser)
router.patch('/user/patch/profile/:userId', authController.updateProfile)

module.exports = router