const prisma = require('../config/prisma')

exports.getAllProduct = () => {
    return prisma.product.findMany()
}

exports.getCategory = () => {
    return prisma.category.findMany()
}