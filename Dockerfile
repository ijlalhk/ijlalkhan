# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the app for production
RUN npm run build

# Expose port 80 to the outside world
EXPOSE 80

# Define environment variable
ENV NODE_ENV=production

# Run the app
CMD ["npm", "run", "preview", "--", "--port", "80", "--host"]

