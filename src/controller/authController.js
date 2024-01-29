const createError = require('../utils/createError')
const userService = require('../services/userService')
const bcrypts = require('bcryptjs')

exports.register = async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (!email || !password || typeof email !== 'string' || typeof password !== 'string') {
            return createError(400, 'Email or Password are invalid')
        }

        const userExist = await userService.getUserByEmail(email)
        if (userExist) {
            return createError(400, 'User already exist')
        }

        const hashPassword = await bcrypts.hash(password, 10)
        await userService.createUser(email, hashPassword)

        res.json({ message: 'Register Success' })

    } catch (error) {
        next(error)
    }
}