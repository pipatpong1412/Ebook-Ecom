const cartService = require('../services/cartService')

exports.getCart = async (req, res, next) => {
    try {
        const myCart = await cartService.getMyCart(req.user.id)
        const cartProduct = await  cartService.getCartProduct(myCart.id)
        res.json(cartProduct)

    } catch (error) {
        next()
    }
}