# Use an official Node.js runtime as the base image
FROM node:16



# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that the application listens on
EXPOSE 3040

# Set the command to run the application
CMD [ "npm", "start" ]
