const express = require('express')
const authenticate = require('../middlewares/authenticate')
const cartController = require('../controller/cartController')
const router = express.Router()

router.get('/mycart', authenticate, cartController.getCart)


module.exports = router