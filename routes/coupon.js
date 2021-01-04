const express = require('express')
const router = express.Router()

//Import Middleware
const { authCheck, adminCheck } = require("../middlewares/auth")

//Import Controller
const { create, remove, list } = require('../controllers/coupon')

router.post("/coupon", authCheck, adminCheck, create)

router.get("/coupons", list)

router.delete("/coupon/:couponId", authCheck, adminCheck, remove)

module.exports = router