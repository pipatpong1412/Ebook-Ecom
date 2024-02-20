const express = require('express')
const router = express.Router()
const authiticate = require('../middlewares/authenticate')
const shelfController = require('../controller/shelfController')

router.get('/myshelf', authiticate, shelfController.getMyShelf)
router.post('/create', authiticate, shelfController.createShelf)

module.exports = router