FROM node:alpine

ENV DOCKERIZE_VERSION v0.8.0

RUN apk update --no-cache \
  && apk add --no-cache wget openssl \
  && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
  && apk del wget

WORKDIR /usr/src/app

COPY ./app/package*.json ./

RUN npm install

RUN npm install -g nodemon

COPY ./app/ .

EXPOSE 3000

# CMD [ "node", "index.js" ]
