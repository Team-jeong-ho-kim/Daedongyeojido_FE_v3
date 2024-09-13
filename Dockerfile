FROM node:18-alpine

WORKDIR /app

COPY .yarn/releases/yarn-*.cjs .yarn/releases/

COPY .yarn/cache .yarn/cache

COPY package.json yarn.lock ./

RUN yarn install --immutable

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]
