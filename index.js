require('dotenv').config()
const express = require('express')
const cors = require('cors')
const errorHandler = require('./src/middlewares/error')
const notFoundHandler = require('./src/middlewares/notFound')
const authRoute = require('./src/routes/authRoute')
const productRoute = require('./src/routes/productRoute')
const categoryRoute = require('./src/routes/categoryRoute')
const cartRoute = require('./src/routes/cartRoute')
const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

app.use('/auth', authRoute)
app.use('/product', productRoute)
app.use('/category', categoryRoute)
app.use('/cart', cartRoute)

app.use(errorHandler)
app.use('*', notFoundHandler)

app.listen(PORT, () => console.log(`THIS APP IS RUNNING ON PORT ${PORT}`))