FROM node:8.9-alpine
MAINTAINER Jesus Bossa <jesusbossa@protonmail.com>
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 5000
CMD npm start
