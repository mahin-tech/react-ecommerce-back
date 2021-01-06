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

router.post("/user/cart", authCheck, userCart) // save cart
router.post("/user/address", authCheck, saveAddress)

router.get('/user/cart', authCheck, getUserCart) //get cart

router.delete('/user/cart', authCheck, emptyCart) // empty cart

// coupon
router.post('/user/cart/coupon', authCheck, applyCouponToUserCart)

router.post('/user/order', authCheck, createOrder) // stripe

router.post('/user/cash-order', authCheck, createCashOrder) // cod

router.get('/user/orders', authCheck, orders)

// wishlist
router.post('/user/wishlist', authCheck, addToWishlist)

router.get('/user/wishlist', authCheck, wishlist)

router.put('/user/wishlist/:productId', authCheck, removeFromWishlist)

module.exports = router