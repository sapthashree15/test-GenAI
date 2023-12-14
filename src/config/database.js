const mongoose = require('mongoose');
const User = require('../models/userModel')

const connectDB = async () => {
    try {
      // Update your MongoDB connection string with authentication details
      await mongoose.connect('mongodb://mongo:27017/learning_platform', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected');

    // Add sample data
    const sampleData = [
      {
        username: 'john_doe',
        password: 'password123',
      },
      {
        username: 'jane_smith',
        password: 'pass456',
      },
      {
        username: 'alex_jones',
        password: 'secret789',
      },
    ];

    await User.insertMany(sampleData);
    console.log('Sample data added to the database');

    // Close the MongoDB connection
    mongoose.connection.close();
    console.log('MongoDB connection closed');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;