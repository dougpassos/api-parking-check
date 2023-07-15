const ParkingModel = require("../models/ParkingModel");

const parkingController = {
  entryVehicle: async(req, res) =>{
    try {
      const parking = {
        plateVehicle: req.body.plateVehicle,
        entryData: req.body.entryData
      };

      const response = await ParkingModel.create(parking);
      res.status(201).json({ response, msg: "Entrada do veiculo registrada com sucesso"})
      
    } catch (error) {
      console.log(error);      
    }
  }
};

module.exports = parkingController;
