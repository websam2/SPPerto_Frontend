# Projeto Dockerizado

Este projeto configura um ambiente Docker para construir e servir uma aplicação web usando Node.js e Nginx.

## Pré-requisitos

- Docker

## Estrutura do Projeto

- `nginx.conf`: Configurações do servidor Nginx.
- `Dockerfile`: Configura o ambiente Docker para construir e servir a aplicação web.

## Configuração

### Nginx

O arquivo `nginx.conf` configura o Nginx para servir a aplicação web.

### Dockerfile

O `Dockerfile` está dividido em dois estágios:

1. **Estágio de Build:**
   - Usa a imagem `node:22-alpine3.19`.
   - Define o diretório de trabalho como `/app`.
   - Copia `package.json` e `package-lock.json`.
   - Instala as dependências do Node.js.
   - Copia todo o código do projeto para o diretório de trabalho.
   - Executa o comando `npm run build --prod` para construir a aplicação.

2. **Estágio de Produção:**
   - Usa a imagem `nginx:alpine`.
   - Copia os arquivos construídos do estágio de build para o diretório do Nginx.
   - Exponha a porta `80`.
   - Define o comando de inicialização do Nginx.

## Como Usar

1. Clone este repositório:
    ```bash
    git clone https://github.com/websam2/SPPerto_Frontend
    cd SPPerto_Frontend
    ```

2. Construa e inicie o contêiner:
    ```bash
    docker build -t nome-da-imagem .
    docker run -p 80:80 nome-da-imagem
    ```

3. Acesse a aplicação em `http://localhost`.

## Estrutura do Projeto

- `src`: Código-fonte da aplicação web.
- `nginx.conf`: Configurações do servidor Nginx.
- `Dockerfile`: Configura os estágios de build e produção do Docker

