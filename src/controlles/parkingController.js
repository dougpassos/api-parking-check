const ParkingModel = require("../models/ParkingModel");

const parkingController = {
  entryVehicle: async(req, res) => {
    try {
      const parking = {
        plateVehicle: req.body.plateVehicle,
        entryData: req.body.entryData
      };
      let response = await ParkingModel.findOne({plateVehicle: parking.plateVehicle, outputData: {$exists: false}});
      if (response) {
        res.status(406).json(
          {
            response,
            msg: "vehicle is now parked in the parking lot"
          }
        );
        return;     
      };
      response = await ParkingModel.create(parking);
      res.status(201).json({ response, msg: "Entrada do veiculo registrada com sucesso"})
      
    } catch (error) {
      console.log(error);      
    }
  },
  outputVehicle: async(req, res) => {
    try {
      const plateVehicle = req.params.plateVehicle;
      const parking = {
        outputData: req.body.outputData
      }
      const vehicle = await ParkingModel.findOne({plateVehicle: plateVehicle,outputData: {$exists: false} });
      if (!vehicle) {
        res.status(404).json(
          {
            plateVehicle: plateVehicle,
            msg: "Vehicle not found"
          }
        );
        return;
      };
      if (vehicle.outputData) {
        res.status(406).json(
          {
            vehicle,
            msg: "output already registered"
          }
        );
        return;        
      };
      const response = await ParkingModel.findOneAndUpdate({plateVehicle: plateVehicle, outputData: {$exists: false}},parking)
      res.status(200).json(response);
    } catch (error) {
      console.log(error);    
    }
    
  },
  allVehicle: async(req, res) => {
    try {
      const parking = await ParkingModel.find();
      res.status(200).json(parking);
    } catch (error) {
      console.log(error); 
    }
  },
  getVehicle: async(req, res) => {
    try {
      const plateVehicle = req.params.plateVehicle;
      const parking = await ParkingModel.findOne({plateVehicle: plateVehicle});
      if (!parking) {
        res.status(404).json(
          {
            plateVehicle: plateVehicle,
            msg: "Vehicle not found"
          }
        );
        return;
      }
      res.status(200).json(parking);
    } catch (error) {
      console.log(error); 
    }
  }
}


module.exports = parkingController;
