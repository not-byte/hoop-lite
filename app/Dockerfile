FROM node:current-alpine

LABEL authors = "botprzemek,pawelos231,akolt19d,nozowymrozon"

ARG NUXT_MAIL_URL
ENV NUXT_MAIL_URL ${NUXT_MAIL_URL}

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

RUN npm run preview

EXPOSE 3000