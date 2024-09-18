FROM node:18-alpine

WORKDIR /app

COPY .yarn/releases/yarn-*.cjs .yarn/releases/
COPY .yarn/cache .yarn/cache
COPY .yarnrc.yml .yarnrc.yml
COPY .pnp.cjs .pnp.cjs

COPY package.json yarn.lock ./
RUN yarn install --immutable

COPY . .

ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

CMD ["yarn", "dev"]
