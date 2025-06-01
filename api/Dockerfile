FROM node:23-alpine

WORKDIR /app/modules
COPY --chmod=744 modules/*.js ./

WORKDIR /app
COPY --chmod=744 *.js package.json package-lock.json ./

RUN npm ci

ENTRYPOINT ["npm"]
