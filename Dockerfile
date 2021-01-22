FROM node:10-alpine

#Diretório padrão da WebApp
WORKDIR /webapp

#Copia todo o projeto para o container 
COPY . .

#Instala as dependências do projeto
RUN npm install --silent

# Expõe porta 9000
EXPOSE 9000

#Coloca a aplicação online
CMD [ "node", "index.js" ]

