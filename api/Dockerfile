FROM node:23-alpine

WORKDIR /app
COPY --chmod=744 * ./

RUN npm ci

CMD npm run app
