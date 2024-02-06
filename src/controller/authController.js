const createError = require('../utils/createError')
const userService = require('../services/userService')
const bcrypts = require('bcryptjs')
const jwt = require('jsonwebtoken')
const prisma = require('../config/prisma')

exports.register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body
        if (!email || !password || typeof email !== 'string' || typeof password !== 'string') {
            return createError(400, 'Email or Password are invalid')
        }

        const userExist = await userService.getUserByEmail(email)
        if (userExist) {
            return createError(400, 'User already exist')
        }

        const hashPassword = await bcrypts.hash(password, 10)
        await userService.createUser(name, email, hashPassword)

        res.json({ message: 'Register Success' })

    } catch (error) {
        next(error)
    }
}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (!email || !password || typeof email !== 'string' || typeof password !== 'string') {
            return createError(400, 'Email or Password are invalid')
        }

        const isUserExist = await userService.getUserByEmail(email)
        if (!isUserExist) {
            return createError(400, 'Email or Password are invalid')
        }

        const isPasswordMatch = await bcrypts.compare(password, isUserExist.password)
        if (!isPasswordMatch) {
            return createError(400, 'Email or Password are invalid')
        }

        const token = jwt.sign({ id: isUserExist.id }, process.env.SECRET_KEY, { expiresIn: process.env.EXPIRES_KEY })
        res.json({ token })

    } catch (error) {
        next(error)
    }
}

exports.getMe = async (req, res, next) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                id: req.user.id
            }
        })

        if (!user) {
            return createError(400, 'User does not exist')
        }
        delete user.password
        res.json({ user })
    } catch (error) {
        next(error)
    }
}