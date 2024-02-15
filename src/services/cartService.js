const prisma = require('../config/prisma')

exports.getMyCart = (id) => {
    return prisma.cart.findFirst({
        where: {
            userId: id
        }
    })
}

exports.getCartProduct = async (id) => {
    const existingCart = await prisma.cart_Product.findMany({
        where: {
            cartId: id
        }
    })
    if (existingCart.length === 0) {
        return null
    } else {
        return existingCart
    }
}

exports.addProducttoCart = (id, productId) => {
    return prisma.cart_Product.create({
        data: {
            quantity: 1,
            productId,
            cartId: id
        }
    })
}