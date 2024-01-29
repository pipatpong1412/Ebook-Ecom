require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.listen(PORT, () => console.log(`THIS APP IS RUNNING ON PORT ${PORT}`))