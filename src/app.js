const express = require('express');
const routes = require('./routes/routes')
const app = express();

app.use(routes);

const conn = require('./db/conn')
conn();

module.exports = app;