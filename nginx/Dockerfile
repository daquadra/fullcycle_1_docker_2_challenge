FROM nginx:alpine

ENV DOCKERIZE_VERSION v0.8.0

RUN apk update --no-cache \
  && apk add --no-cache wget openssl \
  && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
  && apk del wget

# RUN rm /etc/nginx/conf.d/default.conf

COPY ./default.conf /etc/nginx/conf.d/default.conf

RUN touch index.html

EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]


