# Etapa 1: Build - solo dependencias de producción
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY . .

# Etapa 2: Imagen final
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 3012

CMD ["node", "app.js"]
