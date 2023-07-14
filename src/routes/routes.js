const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => res.status(200).send('router ok!!!!!!!!'));
routes.get('/allvehicles', (req, res) => res.status(200).send('all vehicles ok!!!!!!!!'));
routes.post('/entry', (req, res) => res.status(200).send('entry vehicles ok!!!!!!!!'));
routes.post('/output', (req, res) => res.status(200).send('output vehicles ok!!!!!!!!'));

module.exports = routes;