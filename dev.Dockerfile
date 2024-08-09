FROM node:20-alpine AS base

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .
COPY ./prisma ./prisma

FROM node:20-alpine AS development
WORKDIR /app

COPY --from=base /app/node_modules /app/node_modules

COPY --from=base /app .
EXPOSE 3000

CMD ["npm", "run", "dev"]
