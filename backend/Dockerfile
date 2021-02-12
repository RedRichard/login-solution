FROM node:15-slim

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN yarn install

CMD ["./wait-for-it.sh", "mongodb:27017", "--", "npm", "start"]