const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const product = require('../backup-data/product.json')
const category = require('../backup-data/category.json')

const productData = product

const categoryData = category


const run = async () => {

    // await prisma.category.createMany({
    //     data: categoryData
    // })

    await prisma.product.createMany({
        data: productData
    })

}

run()