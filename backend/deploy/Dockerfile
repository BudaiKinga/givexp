FROM node:23-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

COPY . .

EXPOSE 10443
CMD [ "node", "/usr/src/app/src/index.js", "/usr/src/app/config.json"]