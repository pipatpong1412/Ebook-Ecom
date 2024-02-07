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
        const { name } = req.body
        const category = await categoryService.createCategory(name)
        res.json(category)

    } catch (error) {
        next(error)
    }
}

exports.updateCate = async (req, res, next) => {
    try {
        const { id, name } = req.body
        const updateCategory = await categoryService.updateCategory(id, name)
        res.json(updateCategory)

    } catch (error) {
        next(error)
    }
}