# Use the official Node.js runtime as the base image
FROM node:23-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Use Nginx as the production server
FROM nginx:alpine

# Copy the built React app to Nginx's web server directory
COPY --from=build /app/dist /usr/share/nginx/html

COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
# COPY csovui_deploy/nginx/test_env/test_fullchain.pem /etc/ssl/certs
# COPY csovui_deploy/nginx/test_env/test_private.pem /etc/ssl/certs

# Expose port 80 for the Nginx server
EXPOSE 80
EXPOSE 443

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]