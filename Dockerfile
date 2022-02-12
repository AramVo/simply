FROM node:16

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

ARG PORT

EXPOSE $PORT

CMD ["node", "./src/server.js"]