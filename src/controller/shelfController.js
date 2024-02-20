const shelfService = require('../services/shelfService')

exports.getMyShelf = async (req, res, next) => {
    try {
        const rs = await shelfService.myShelf(req.user.id)
        res.json(rs)

    } catch (error) {
        next(error)
    }
}

exports.createShelf = async (req, res, next) => {
    try {
        const { productId } = req.body
        console.log(productId)
        const isPaidProduct = await shelfService.paidProduct(req.user.id, productId)
        if (isPaidProduct) {
            const rs = await shelfService.createShelf(req.user.id, productId)
            res.json(rs)
        }

    } catch (error) {
        next(error)
    }
}