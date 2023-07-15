const mongoose = require('mongoose');
const { Schema } = mongoose;

const parkingSchema = new Schema({
  plateVehicle: {
    type: String,
    required: true
  },
  entryData:{
    type: Date,
    required: true
  },
  outputData:{
    type: Date,
    required: false
  }
});

const ParkingModel = mongoose.model('Parking', parkingSchema);

module.exports = ParkingModel;