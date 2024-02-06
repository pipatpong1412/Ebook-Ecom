const categoryService = require('../services/categoryService')

exports.getAllCategory = async (req, res, next) => {
    try {
        const category = await categoryService.getCategory()
        res.json(category)

    } catch (error) {
        next(error)
    }
}

exports.creteCate = async (req, res, next) => {
    try {
        const category = await categoryService.createCategory()
        res.json(category)

    } catch (error) {
        next(error)
    }
}