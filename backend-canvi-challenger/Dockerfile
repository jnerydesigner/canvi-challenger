# Primeiro estágio: Builder
FROM node:22 AS builder

RUN npm i -g @nestjs/cli

WORKDIR /app

# Copie os arquivos de config e dependências
COPY package.json yarn.lock tsconfig.build.json ./
COPY src/infra/database/prisma /app/prisma
COPY . .

RUN yarn install --frozen-lockfile

RUN apt-get update -y && apt-get install -y openssl

# Gera código do Prisma e builda a aplicação
RUN yarn prisma:generate:deploy
RUN yarn build

# Segundo estágio: Runner
FROM node:22-slim

WORKDIR /app

# Copie os arquivos necessários do build
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

RUN apt-get update -y && apt-get install -y openssl

# Instale apenas dependências de produção
RUN yarn cache clean && yarn install --production --frozen-lockfile

EXPOSE 5551

# Comando final: aplica migrate e inicia app
CMD yarn prisma:migrate:deploy && node dist/src/main.js
