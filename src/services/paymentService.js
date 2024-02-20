const prisma = require("../config/prisma")

exports.getPayment = (userId) => {
    return prisma.payment.findFirst({
        where: {
            userId,
            status: 'PENDING'
        }
    })
}

exports.createPayment = (totalQuantity, totalPrice, cartId, userId) => {
    return prisma.payment.create({
        data : {
            totalQuantity,
            totalPrice,
            cartId,
            userId
        }
    })
}

exports.finishPayment = (id, method) => {
    return prisma.payment.update({
        where: {
            id
        },
        data: {
            method,
            status: 'SUCCESS'
        }
    })
}