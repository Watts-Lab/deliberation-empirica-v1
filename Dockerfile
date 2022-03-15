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
COPY .storybook ./.storybook
COPY .babelrc .

RUN mkdir -p .meteor/local
RUN chmod -R 700 .meteor/local

# if the db in `.meteor/local` gets corrupted, rebuild with this uncommented (or just run this in the live container and restart meteor)
#RUN meteor reset --allow-superuser 

#CMD ["meteor", "--allow-superuser"]