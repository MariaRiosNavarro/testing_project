FROM node:alpine
WORKDIR /app
COPY . .
RUN npm i
CMD [ "node","--watch","server.js" ]