# apps/web/Dockerfile

# Usa uma imagem leve do Nginx, que é um servidor web
FROM nginx:alpine

# Copia todo o conteúdo da pasta /apps/web (index.html, css, js, etc)
# para a pasta padrão onde o Nginx serve os arquivos
COPY . /usr/share/nginx/html

# Expõe a porta 80 (padrão do Nginx)
EXPOSE 80