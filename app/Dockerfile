FROM node:current-alpine

LABEL authors = "botprzemek,pawelos231,akolt19d,nozowymrozon"

ARG NUXT_MAIL_URL

ENV HOST="127.0.0.1"
ENV PORT="3000"
ENV NODE_ENV="production"
ENV NUXT_MAIL_URL ${NUXT_MAIL_URL}

WORKDIR /app

COPY package*.json .

RUN npm ci --only=production

COPY . .

RUN npm run build

CMD ["node", ".output/server/index.mjs"]

EXPOSE 3000