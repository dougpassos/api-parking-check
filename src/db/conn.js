const mongoose = require('mongoose');
require('dotenv').config();

async function main() {

  try {
    await mongoose.connect(process.env.CONNECT_DB);
    console.log('mongo OK!!')
  } catch (error) {
    console.error(`Error MongoDB: ${error}`);    
  }  
}

module.exports = main;
