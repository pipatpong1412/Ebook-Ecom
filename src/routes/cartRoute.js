const express = require('express')
const authenticate = require('../middlewares/authenticate')
const cartController = require('../controller/cartController')
const router = express.Router()

router.get('/mycart', authenticate, cartController.getCart)
router.post('/add/:productId', authenticate, cartController.addProducttoCart)
router.delete('/del/:productId', authenticate, cartController.delProductInCart)


module.exports = router