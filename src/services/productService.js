const prisma = require('../config/prisma')

exports.getAllProduct = () => {
    return prisma.product.findMany()
}

exports.createProduct = (name, img, detail, price, author, publisher, categoryId ) => {
    return prisma.product.create({
        data: {
            name,
            img,
            detail,
            price,
            author,
            publisher,
            categoryId
        }
    })
}