FROM node:18.14.2-alpine as build
WORKDIR /app
COPY package.json package-lock.json .npmrc .
RUN npm install
ADD . .
RUN npm run build:webpack

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --chmod=0755 nginx/env.sh /docker-entrypoint.d/env.sh
COPY --from=build /app/dist /usr/share/nginx/html/sources/report-ui

