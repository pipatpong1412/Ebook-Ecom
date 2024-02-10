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

exports.updateCategory = (categoryId, name) => {
    return prisma.category.update({
        where: {
            id: categoryId
        },
        data: {
            name
        }
    })
}

exports.deleteCategory = (categoryId) => {
    return prisma.category.delete({
        where: {
            id: categoryId
        }
    })
}