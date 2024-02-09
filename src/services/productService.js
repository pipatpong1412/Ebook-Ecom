const prisma = require('../config/prisma')

exports.getAllProduct = () => {
    return prisma.product.findMany()
}

exports.createProduct = (name, img, detail, price, author, publisher, categoryId) => {
    return prisma.product.create({
        data: {
            name,
            img,
            detail,
            price: Number(price),
            author,
            publisher,
            categoryId
        }
    })
}

exports.deleteProduct = (productId) => {
    return prisma.product.delete({
        where: {
            id: productId
        }
    })
}

exports.updateProduct = (productId, name, img, detail, price, author, publisher, categoryId) => {
    return prisma.product.update({
        where: {
            id: productId
        },
        data: {
            name,
            img,
            detail,
            price: Number(price),
            author,
            publisher,
            categoryId
        }
    })
}