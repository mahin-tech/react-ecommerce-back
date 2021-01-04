const Sub = require("../models/sub")
const Product = require('../models/product')
const slugify = require('slugify')

exports.create = async (req, res) => {
    try {
        const { name, parent } = req.body
        //const sub = await new Sub({ name, parent, slug: slugify(name) }).save()
        res.json(await new Sub({ name, parent, slug: slugify(name) }).save())
    } catch (error) {
        console.log(error)
        res.status(400).send("Create sub failed")
    }
}

exports.list = async (req, res) => {
    try {
        let sub = await Sub.find().sort({ createdAt: -1 }).exec()
        res.json(sub)
    } catch (error) {
        console.log(error)
    }
}

exports.read = async (req, res) => {
    try {
        let sub = await Sub.findOne({ slug: req.params.slug }).exec()
        const products = await Product.find({ subs: sub })
            .populate("category")
            .exec()
        res.json({ sub, products })
    } catch (error) {
        console.log(error)
    }
}

exports.update = async (req, res) => {
    const { name, parent } = req.body
    try {
        const updated = await Sub.findOneAndUpdate(
            { slug: req.params.slug },
            { name, parent, slug: slugify(name) },
            { new: true }
        )
        res.json(updated)
    } catch (error) {
        return res.status(400).send("Update sub failed")
    }
}

exports.remove = async (req, res) => {
    try {
        let deleted = await Sub.findOneAndDelete({ slug: req.params.slug })
        return res.json(deleted)
    } catch (error) {
        console.log(error)
        return res.status(400).send("Delete sub failed")
    }
}