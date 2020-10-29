FROM node:15 as build
WORKDIR /rest-api
COPY . .
RUN set -x \
    && apk add --no-cache git \
    && echo "VERSION="$(git rev-list --all --count) > .env \
    && cat .env \
    && npm install \
    && npm run build

FROM node:15
WORKDIR /rest-api
COPY --from=build /app/dist ./dist
COPY package.json .
EXPOSE 3000
RUN npm install --production
CMD npm run start:production
