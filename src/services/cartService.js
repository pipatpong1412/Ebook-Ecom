const prisma = require('../config/prisma')

exports.getMyCart = (userId) => {
    return prisma.cart.findMany({
        where: {
            userId,
            status: 'PENDING'
        }
    })

}


exports.addProducttoCart = (userId, productId, price) => {
    return prisma.cart.create({
        data: {
            userId,
            productId,
            price,
            quantity: 1,
        }
    })
}

exports.delProductFromCart = async (id) => {
    return await prisma.cart.delete({
        where: {
            id
        }
    })

}
