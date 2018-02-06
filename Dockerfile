FROM node:9-alpine


USER node
WORKDIR /usr/node

COPY package.json .
RUN npm install --quiet
