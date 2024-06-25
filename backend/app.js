const express = require("express")
const app = express()
const cors = require('cors')


if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

// const Student = require('./routes/students.js')
// app.use("/api/v1/", Student)

module.exports = app