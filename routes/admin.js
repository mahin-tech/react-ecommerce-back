const express = require('express')
const router = express.Router()

//Import Middleware
const { authCheck, adminCheck } = require("../middlewares/auth")

//Import Controller
const { orders, orderStatus } = require('../controllers/admin')

router.get('/admin/orders', authCheck, adminCheck, orders)
router.put('/admin/order-status', authCheck, adminCheck, orderStatus)

module.exports = router