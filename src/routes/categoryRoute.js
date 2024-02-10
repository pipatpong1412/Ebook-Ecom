const express = require('express')
const router = express.Router()
const categoryController = require('../controller/categoryController')

router.get('/', categoryController.getAllCategory)
router.post('/create', categoryController.createCate)
router.patch('/patch/:categoryId', categoryController.updateCate)
router.delete('/del/:categoryId', categoryController.deleteCate)

module.exports = router