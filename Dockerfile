
FROM node:22 AS base

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./
RUN sh -c "if [ -f package-lock.json ]; then npm ci --only=production --silent; else npm install --only=production --silent; fi"

COPY . .

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

USER appuser

ENV NODE_ENV=production

EXPOSE 80

CMD ["node", "index.js"]

