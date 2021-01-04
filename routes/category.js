const express = require('express')
const router = express.Router()

//Import Middleware
const { authCheck, adminCheck } = require("../middlewares/auth")

//Import Controller
const { create, read, update, remove, list, getSubs } = require('../controllers/category')

router.post("/category", authCheck, adminCheck, create)

router.get("/categories", list)
router.get("/category/:slug", read)
router.get("/category/subs/:_id", getSubs)

router.put("/category/:slug", authCheck, adminCheck, update)

router.delete("/category/:slug", authCheck, adminCheck, remove)

module.exports = router