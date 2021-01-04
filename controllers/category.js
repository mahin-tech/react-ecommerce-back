const Category = require("../models/category")
const Sub = require('../models/sub')
const Product = require('../models/product')
const slugify = require('slugify')

exports.create = async (req, res) => {
    try {
        const { name } = req.body
        res.json(await new Category({ name, slug: slugify(name) }).save())
    } catch (error) {
        console.log(error)
    }
}

exports.list = async (req, res) => {
    try {
        let category = await Category.find().sort({ createdAt: -1 }).exec()
        return res.json(category)
    } catch (error) {
        console.log(error)
    }
}

exports.read = async (req, res) => {
    try {
        let category = await Category.findOne({ slug: req.params.slug }).exec()
        const products = await Product.find({ category })
            .populate("category")
            .populate("postedBy", "_id name")
            .exec()
        res.json({ category, products })
    } catch (error) {
        console.log(error)
    }
}

exports.update = async (req, res) => {
    const { name } = req.body
    try {
        const updated = await Category.findOneAndUpdate(
            { slug: req.params.slug },
            { name, slug: slugify(name) },
            { new: true }
        )
        res.json(updated)
    } catch (error) {
        console.log(error)
        return res.status(400).send("Update category failed")
    }
}

exports.remove = async (req, res) => {
    try {
        let deleted = await Category.findOneAndDelete({ slug: req.params.slug })
        return res.json(deleted)
    } catch (error) {
        console.log(error)
        return res.status(400).send("Delete category failed")
    }
}

exports.getSubs = async (req, res) => {
    try {
        await Sub.find({ parent: req.params._id }).exec((err, subs) => {
            if (err) console.log(err)
            return res.json(subs)
        })
    } catch (error) {
        console.log(error)
    }
}