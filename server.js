const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
require('dotenv').config()

//app
const app = express()

//DB Connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB CONNECTED"))
    .catch((err) => console.log("DB CONNECTION ERR", err))

//Middlewares
app.use(morgan("dev"))
app.use(bodyParser.json({ limit: "2mb" }))
app.use(cors())

//Routes Middleware
fs.readdirSync("./routes").map((r) =>
    app.use("/api", require("./routes/" + r))
)

//PORT
const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server is running on port ${port}`))