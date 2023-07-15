const express = require('express');
const app = express();
const router = require('./routes/router')
app.use(express.json())

app.use("/api", router);

const conn = require('./db/conn')
conn();

module.exports = app;