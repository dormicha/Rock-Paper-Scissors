# Use an official nginx image as the base image
FROM nginx:alpine

# Copy the contents of the current directory to /usr/share/nginx/html
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
