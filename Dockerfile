FROM node:lts-slim

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

RUN curl -L https://github.com/devsoleo/map-generator/releases/download/latest/main.wasm -o ./dist/build/main.wasm

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]
