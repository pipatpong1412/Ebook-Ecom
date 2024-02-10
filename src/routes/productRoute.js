const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')

router.get('/', productController.getAllProduct)
router.post('/create', productController.createProduct)
router.delete('/del/:productId', productController.deleteProduct)
router.get('/:id', productController.getProductById)
router.patch('/patch/:productId', productController.updateProduct)

module.exports = router