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

exports.updateCategory = (id, name) => {
    return prisma.category.update({
        where:{
            id
        },
        data : {
            name
        }
    })
}

exports.deleteCategory = (id) => {
    return prisma.category.delete({
        where: {
            id
        }
    })
}