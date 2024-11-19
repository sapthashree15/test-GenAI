const mongoose = require('mongoose');
const User = require('../models/userModel');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://root:iSqItPYCTFzjht8p45HPCif6@@172.21.79.10:27017', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      authSource: 'admin'  // Use the admin database for authentication
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
