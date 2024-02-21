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
        const rs = await shelfService.createShelf(req.user.id, productId)
        res.json(rs)
        // }

    } catch (error) {
        next(error)
    }
}