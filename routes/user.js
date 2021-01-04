const express = require('express')
const router = express.Router()

//Import Middleware
const { authCheck } = require("../middlewares/auth")

//Import Controller
const {
    userCart,
    getUserCart,
    emptyCart,
    saveAddress,
    applyCouponToUserCart,
    createOrder,
    orders,
    addToWishlist,
    wishlist,
    removeFromWishlist,
    createCashOrder
} = require('../controllers/user')

router.post("/user/cart", authCheck, userCart)
router.post("/user/address", authCheck, saveAddress)

router.get('/user/cart', authCheck, getUserCart)

router.delete('/user/cart', authCheck, emptyCart)

router.post('/user/cart/coupon', authCheck, applyCouponToUserCart)

router.post('/user/order', authCheck, createOrder)

router.post('/user/cash-order', authCheck, createCashOrder)

router.get('/user/orders', authCheck, orders)

router.post('/user/wishlist', authCheck, addToWishlist)

router.get('/user/wishlist', authCheck, wishlist)

router.put('/user/wishlist/:productId', authCheck, removeFromWishlist)

module.exports = router