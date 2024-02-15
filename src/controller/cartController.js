const cartService = require('../services/cartService')

exports.getCart = async (req, res, next) => {
    try {
        const myCart = await cartService.getMyCart(req.user.id)
        const cartProduct = await cartService.getCartProduct(myCart.id)
        if (cartProduct === null) {
            res.json(myCart.id)
        } else {
            // console.log(typeof cartProduct)
            res.json(cartProduct)
        }

    } catch (error) {
        next(error)
    }
}

exports.addProducttoCart = async (req, res, next) => {
    try {
        const { productId } = req.params
        const myCart = await cartService.getMyCart(req.user.id)
        const rs = await cartService.addProducttoCart(myCart.id, productId)
        res.json(rs)

    } catch (error) {
        next(error)
    }
}