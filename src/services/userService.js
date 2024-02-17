const prisma = require('../config/prisma')

exports.getUserByEmail = (email) => {
    return prisma.user.findFirst({
        where: {
            email
        }
    })
}

exports.createUser = (name, email, password) => {
    return prisma.user.create({
        data: {
            name,
            email,
            password
        }
    })
}

exports.getUserById = (id) => {
    return prisma.user.findFirst({
        where: {
            id
        }
    })
}

exports.getAllUser = () => {
    return prisma.user.findMany()
}

exports.deleteUesr = (userId) => {
    const userCarts = prisma.cart.findMany({
        where: {
            userId: userId,
        },
    });

    for (const cart of userCarts) {
        prisma.cart_Product.deleteMany({
            where: {
                cartId: cart.id,
            },
        });

        prisma.cart.delete({
            where: {
                id: cart.id,
            },
        });
    }

    prisma.user.delete({
        where: {
            id: userId,
        },
    })
}

exports.updateRole = (userId, role) => {
    return prisma.user.update({
        where: {
            id: userId
        },
        data: {
            role
        }
    })
}

exports.updateProfile = (userId, name, email, phone) => {
    return prisma.user.update({
        where: {
            id: userId
        },
        data: {
            name,
            email,
            phone
        }
    })
}

exports.createCartUser = async (userId) => {
    const existingCart = await prisma.cart.findFirst({
        where: {
            userId: userId
        }
    });

    if (!existingCart) {
        return prisma.cart.create({
            data: {
                userId: userId
            }
        });
    } else {
        return existingCart
    }
}