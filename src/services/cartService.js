const prisma = require('../config/prisma')

exports.getMyCart = (id) => {
    return prisma.cart.findFirst({
        where: {
            userId: id
        }
    })
}

exports.getCartProduct = (id) => {
    return prisma.cart_Product.findMany({
        where: {
            cartId: id
        }
    })
}