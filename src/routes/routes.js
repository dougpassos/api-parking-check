const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => res.status(200).send('router ok!!!!!!!!'));

module.exports = routes;