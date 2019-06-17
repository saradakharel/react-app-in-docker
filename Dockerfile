# base image
FROM node:12.2.0-alpine

# set working directory
RUN mkdir -p /app/client
WORKDIR /app/client/


# install and cache app dependencies
COPY package*.json /app/client/

RUN npm install

COPY . /app/client/

EXPOSE 3000

# start app
CMD ["npm", "start"]
