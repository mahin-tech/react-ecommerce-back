const express = require('express')
const router = express.Router()

//Import Middleware
const { authCheck, adminCheck } = require("../middlewares/auth")

//Import Controller
const { create, listAll, remove, read, update, list, productsCount, listRelated, productStar, searchFilters } = require('../controllers/product')

router.post("/product", authCheck, adminCheck, create)

router.get("/products/:count", listAll)
router.get("/product/:slug", read)
router.get('/products/total', productsCount)
router.get('/product/related/:productId', listRelated)

router.delete("/product/:slug", authCheck, adminCheck, remove)

router.put("/product/:slug", authCheck, adminCheck, update)

router.post('/products', list)

//Rating Routes
router.put("/product/star/:productId", authCheck, productStar)

//Search Route
router.post("/search/filters", searchFilters)

module.exports = router