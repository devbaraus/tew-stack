FROM node:lts-alpine AS build

WORKDIR /app
COPY . .
RUN rm -rf ./node_modules
RUN yarn
RUN yarn build

FROM nginx:stable-alpine

COPY --from=build /app/dist/ /var/www
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
