FROM node:16-bullseye

WORKDIR /app

RUN curl https://install.meteor.com/ -k | sh

COPY package.json .
COPY package-lock.json .
RUN meteor npm install

COPY /client ./client
COPY /public ./public
COPY /server ./server
COPY /.meteor ./.meteor

RUN mkdir -p .meteor/local
RUN chmod -R 700 .meteor/local

CMD ["meteor", "--allow-superuser"]