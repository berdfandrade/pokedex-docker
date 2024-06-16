# Dockerfile

# Use a imagem oficial do Node.js como base
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN yarn

# Copia o restante do código da aplicação
COPY . .

# Constrói a aplicação para produção
RUN yarn build

# Expõe a porta que a aplicação utilizará
EXPOSE 5173

# Comando para rodar a aplicação em modo de desenvolvimento
CMD ["yarn", "dev"]