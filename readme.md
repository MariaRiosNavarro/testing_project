# Server Testing project

## SETUP

npm i express mongoose dotenv supertest

npm init -y

npm i express dotenv

npm i -D jest supertest

### Dockerfile

```

FROM node:alpine
WORKDIR /app
COPY . .
RUN npm i
CMD [ "node","--watch","server.js" ]

```

## docker-compose.yml

I put server before (dependencies) and add it a port (27018) to open in mongodb Compass (21017 is another mongodb-test)

```
version: '3.8'
services:
  database:
    container_name: horseDB
    image: mongo:latest
    networks:
      - backend
    ports:
      - 27018:27017
    volumes:
      - dataDB:/data/db
  server:
    build: ./
    networks:
      - backend
    container_name: horseServer
    ports:
      - 9000:9000
    volumes:
      - ./:/app
    depends_on:
      - database
networks:
  backend:
volumes:
  dataDB:

```

## .dockerignore

```
node_modules/

```

## .gitignore

```
node_modules/
.env
```
