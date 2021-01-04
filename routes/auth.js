const express = require('express')
const router = express.Router()

//Import Middleware
const { authCheck, adminCheck } = require("../middlewares/auth")

//Import Controller
const { createOrUpdateUser, currentUser } = require('../controllers/auth')

router.post("/create-or-update-user", authCheck, createOrUpdateUser)

router.post("/current-user", authCheck, currentUser)

router.post("/current-admin", authCheck, adminCheck, currentUser)

module.exports = router