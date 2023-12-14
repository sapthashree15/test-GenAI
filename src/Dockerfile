# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port on which your application will run
EXPOSE 3000

# Set the environment variables
ENV MONGO_HOST=mongodb://mongo:27017/learning_platform

# Start MongoDB and the Node.js server
CMD ["docker-entrypoint.sh"]

# Create a separate Dockerfile for MongoDB
FROM mongo:latest

# Expose the default MongoDB port
EXPOSE 27017