#!/bin/bash

# Start MongoDB server in the background
mongod --fork --logpath /var/log/mongodb.log

# Wait for MongoDB to start
until nc -z localhost 27017; do
  sleep 1
done

# Start the Node.js server
npm start