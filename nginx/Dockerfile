FROM nginx:alpine-slim

COPY ./default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

RUN touch index.html

CMD ["nginx", "-g", "daemon off;"]


