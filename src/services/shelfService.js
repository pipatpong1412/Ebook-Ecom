const prisma = require("../config/prisma")

exports.myShelf = (userId) => {
    return prisma.shelf.findMany({
        where: {
            userId
        }
    })
}

exports.paidProduct = (userId, productId) => {
    return prisma.cart.findFirst({
        where: {
            status: "SUCCESS",
            userId,
            productId,
            Payment: {
                some: {
                    status: "SUCCESS",
                    userId
                }
            }
        }
    })
}

exports.createShelf = (userId, productId) => {
    return prisma.shelf.create({
        data: {
            userId,
            productId
        }
    })
}
