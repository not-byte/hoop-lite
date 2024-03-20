FROM node:current-alpine

LABEL authors = "botprzemek,pawelos231,akolt19d,nozowymrozon"

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

CMD ["node", ".output/server/index.mjs"]

EXPOSE 3000