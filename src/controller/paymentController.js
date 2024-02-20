const paymentService = require('../services/paymentService')

exports.getPayment = async (req, res, next) => {
    try {
        // const { payemntId } = req.params
        const rs = await paymentService.getPayment(req.user.id)
        res.json(rs)

    } catch (error) {
        next(error)
    }
}

exports.createPayment = async (req, res, next) => {
    try {
        const { paymentData } = req.body
        const rs = await paymentService.createPayment(paymentData.totalQuantity, paymentData.totalPrice, paymentData.cartId, req.user.id)

        res.json(rs)

    } catch (error) {
        next(error)
    }
}

exports.finishPayment = async (req, res, next) => {
    try {
        const { paymentData } = req.body
        const rs = await paymentService.finishPayment(paymentData.id, paymentData.method)
        res.json(rs)

    } catch (error) {
        next(error)
    }
}