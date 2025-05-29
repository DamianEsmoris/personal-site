FROM node:23-alpine

WORKDIR /app
COPY --chmod=744 * ./

RUN npm install

CMD npm run app
