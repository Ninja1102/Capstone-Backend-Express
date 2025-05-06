# Use Node.js base image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the API Gateway port
EXPOSE 9994

# Start the Express API Gateway
CMD ["node", "app.js"]
