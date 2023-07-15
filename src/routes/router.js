const router = require('express').Router();
const parkingController = require('../controlles/parkingController')


router.post('/entry', (req, res) => parkingController.entryVehicle(req, res));
router.put('/output', (req, res) => res.status(200).send('output vehicles ok!!!!!!!!'));

module.exports = router;