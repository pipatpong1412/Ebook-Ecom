require('dotenv').config()
const express = require('express')
const cors = require('cors')
const errorHandler = require('./src/middlewares/error')
const notFoundHandler = require('./src/middlewares/notFound')
const authRoute = require('./src/routes/authRoute')
const authenticate = require('./src/middlewares/authenticate')
const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

app.use('/auth', authRoute)

app.use(errorHandler)
app.use('*', notFoundHandler)

app.listen(PORT, () => console.log(`THIS APP IS RUNNING ON PORT ${PORT}`))