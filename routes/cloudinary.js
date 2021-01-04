const express = require('express')
const router = express.Router()

//Import Middleware
const { authCheck, adminCheck } = require("../middlewares/auth")

//Import Controller
const { upload, remove } = require('../controllers/cloudinary')

router.post("/uploadimages", authCheck, adminCheck, upload)

router.post("/removeimage", authCheck, adminCheck, remove)

module.exports = router