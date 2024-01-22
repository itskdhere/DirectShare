FROM node:20.11.0-alpine3.19

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

ENV ENV=$ENV

ENV APP_DOMAIN=$APP_DOMAIN

ENV PORT=$PORT

EXPOSE $PORT

CMD ["npm", "start"]