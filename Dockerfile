FROM node:12.8-alpine

WORKDIR /app

RUN apk update && \
    apk add git

COPY . .

RUN yarn install