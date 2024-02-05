const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const productData = [
    { name: 'Learning Python', img: 'https://www.magazinesdirect.com/images/covers/vlarge-BKZ-B6347.jpg', detail: 'for who want to be Python Programmer', price: 200, author: 'Peter', publisher: 'Kayan Book', categoryId: '65c0688b3dd203b5ead3e2a3' },
    { name: 'Born to be slime', img: 'https://animatebkk-online.com/wp-content/uploads/2022/09/9784065297506_1_2.jpg', detail: 'for junibyou', price: 250, author: 'Peter', publisher: 'Kayan Book', categoryId: '65c0688b3dd203b5ead3e2a4' },
    { name: 'How to be diligent person', img: 'https://makeheadway.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F181188%2Ff85dbe3856%2F74c8180cf77a49bba119-164cb99b9f3f7e-en.jpg&w=750&q=75', detail: 'if you want to improve yourself buy it', price: 300, author: 'Peter', publisher: 'Kayan Book', categoryId: '65c0688b3dd203b5ead3e2a5' }
]

const categoryData = [
    { name: 'Coding' },
    { name: 'Novel' },
    { name: 'Self-Improvement' }
]

const run = async () => {

    // await prisma.category.createMany({
    //     data: categoryData
    // })

    await prisma.product.createMany({
        data: productData
    })
}

run()