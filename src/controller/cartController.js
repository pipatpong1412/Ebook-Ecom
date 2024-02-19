const cartService = require('../services/cartService')

exports.getCart = async (req, res, next) => {
    try {
        const myCart = await cartService.getMyCart(req.user.id)
        res.json(myCart)

    } catch (error) {
        next(error)
    }
}

exports.addProducttoCart = async (req, res, next) => {
    try {
        const { productId } = req.params
        const { product } = req.body

        const rs = await cartService.addProducttoCart(req.user.id, productId, product.price)
        res.json(rs)

    } catch (error) {
        next(error)
    }
}

exports.delProductInCart = async (req, res, next) => {
    try {
        const { cartId } = req.params
        
        const rs = await cartService.delProductFromCart(cartId)
        res.json(rs)

    } catch (error) {
        next(error)
    }
}