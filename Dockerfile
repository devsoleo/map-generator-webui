FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN apk --no-cache add curl
RUN curl -L https://github.com/devsoleo/map-generator/releases/download/latest/main.wasm -o ./public/build/main.wasm

EXPOSE 3000

CMD [ "npm", "run", "start" ]