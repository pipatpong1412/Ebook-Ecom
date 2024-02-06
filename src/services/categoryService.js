const prisma = require('../config/prisma')

exports.getCategory = () => {
    return prisma.category.findMany()
}

exports.createCategory = (name) => {
    return prisma.category.create({
        data: {
            name
        }
    })
}