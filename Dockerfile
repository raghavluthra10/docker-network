FROM node:18-alpine

WORKDIR /app

COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml

RUN npm install pnpm -g
RUN pnpm install

COPY . .

CMD ["node", "index.js"]

EXPOSE 3000