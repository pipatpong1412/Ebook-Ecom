const prisma = require('../config/prisma')

exports.getAllProduct = () => {
    return prisma.product.findMany()
}

exports.getProductById = (id) => {
    return prisma.product.findFirst({
        where: {
            id
        }
    })
}

exports.createProduct = (name, img, detail, price, author, publisher, url, categoryId) => {
    return prisma.product.create({
        data: {
            name,
            img,
            detail,
            price: Number(price),
            author,
            publisher,
            url,
            categoryId
        }
    })
}

exports.getProductByName = (name) => {
    return prisma.product.findMany({
        where: {
            name : {
                contains: name,
                mode: 'insensitive'
            }
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

exports.updateProduct = (productId, name, img, detail, price, author, publisher, url, categoryId) => {
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
            url,
            categoryId
        }
    })
}