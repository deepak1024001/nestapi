FROM node:16-alpine

ARG BUILD_TIME=""
ARG HASH=""
ARG VERSION=""

ENV BUILD_TIME=${BUILD_TIME}
ENV HASH=${HASH}
ENV VERSION=${VERSION}

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm","run","start:prod"]