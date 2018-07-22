# Use node:6
FROM node:6
COPY . /carnatic-api

# Change working directory
WORKDIR /carnatic-api

# Install dependencies
RUN npm install

# Expose API port to the outside
EXPOSE 3000

# Launch application
CMD ["npm","start"]

