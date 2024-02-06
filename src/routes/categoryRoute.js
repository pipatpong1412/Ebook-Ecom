const express = require('express')
const router = express.Router()
const categoryController = require('../controller/categoryController')

router.get('/', categoryController.getAllCategory)
router.post('/', categoryController.creteCate)


module.exports = router