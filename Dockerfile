FROM node:12-alpine

WORKDIR '/app'

RUN npm install -g express-gateway

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .
CMD ["npm", "start"]
