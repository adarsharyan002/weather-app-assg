# Use an official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the entire app directory to the working directory
COPY . .

# Build the React app (if you are using a build step)
# RUN npm run build

# Expose the port on which your React app will run (default: 3000)
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
