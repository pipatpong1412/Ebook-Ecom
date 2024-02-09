const express = require('express')
const router = express.Router()
const categoryController = require('../controller/categoryController')

router.get('/', categoryController.getAllCategory)
router.post('/newCate', categoryController.creteCate)
router.patch('/updateCate/:categotyId', categoryController.updateCate)
router.delete('/del/:categoryId', categoryController.deleteCate)


module.exports = router