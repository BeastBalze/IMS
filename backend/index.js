const express = require("express")
const app = express()

const { connectDb } = require('./config/db.config.js');

connectDb()

app.listen(4000, () => {
    console.log(`Server is running on ${4000}`);
});