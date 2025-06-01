FROM node:lts-alpine as runtime
WORKDIR /app
COPY . .

RUN npm ci
RUN npm run build

ENV HOST=0.0.0.0

CMD node ./dist/server/entry.mjs
