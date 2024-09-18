FROM node:18-alpine

WORKDIR /app

COPY . .

COPY package.json yarn.lock ./
RUN yarn install --immutable

ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

CMD ["yarn", "dev"]
