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

exports.deleteUesr = (id) => {
    return prisma.user.delete({
        where: {
            id
        }
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
