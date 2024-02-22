const prisma = require('../config/prisma')

exports.getMyCart = (userId) => {
    return prisma.cart.findMany({
        where: {
            userId,
            status: 'IN_PAYMENT'
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

exports.updateCartProduct = (id) => {
    return prisma.cart.update({
        where: {
            id
        },
        data: {
            status: 'SUCCESS'
        }
    })
}

exports.delProductFromCart = async (id) => {
    const rs = await prisma.payment.findFirst({
        where: {
            cartId: id,
            status: 'PENDING'
        }
    });

    if (rs) {
        await prisma.payment.deleteMany({
            where: {
                cartId: id
            }
        });

        return prisma.cart.delete({
            where: {
                id
            }
        })
        
    } else {
        return prisma.cart.delete({
            where: {
                id
            }
        })
    }
}
