FROM node:20-alpine
# Adiciona o 'curl' para o health check
RUN apk add --no-cache curl

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .
EXPOSE 3000
CMD ["node", "index.js"]