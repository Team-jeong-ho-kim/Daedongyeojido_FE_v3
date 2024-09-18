FROM node:18-alpine

WORKDIR /app

COPY . .

COPY package.json yarn.lock ./
RUN yarn install --immutable

EXPOSE 5173

CMD ["yarn", "dev"]
