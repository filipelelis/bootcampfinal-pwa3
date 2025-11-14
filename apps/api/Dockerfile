# 1. Mude "alpine" para a imagem padrão e estável
FROM node:20

# 2. Apague a linha "RUN apk add... curl", porque o curl já existe

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .
EXPOSE 3000
CMD ["node", "index.js"]