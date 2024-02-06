const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')
const authenticate = require('../middlewares/authenticate')

router.get('/', authenticate, productController.getAllProduct)
router.get('/:id', productController.getProductById)


module.exports = router