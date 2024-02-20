const express  = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const paymentController = require('../controller/paymentController')

router.get('/', authenticate, paymentController.getPayment)
router.post('/add', authenticate, paymentController.createPayment)
router.patch('/complete', authenticate, paymentController.finishPayment)

module.exports = router