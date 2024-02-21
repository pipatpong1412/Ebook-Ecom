const prisma = require("../config/prisma")

exports.myShelf = (userId) => {
    return prisma.shelf.findMany({
        where: {
            userId
        }
    })
}

exports.paidProduct = async (userId, productId) => {
    return await prisma.cart.findFirst({
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
