const router = require('express').Router();
const parkingController = require('../controlles/parkingController')


router.post('/parking', (req, res) => parkingController.entryVehicle(req, res));
router.patch ('/parking/:plateVehicle', (req, res) => parkingController.outputVehicle(req, res));
router.get('/parking', (req, res) => parkingController.allVehicle(req,res));
router.get('/parking/:plateVehicle', (req, res) => parkingController.getVehicle(req,res));

module.exports = router;