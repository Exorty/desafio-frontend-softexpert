# Desafio Frontend SoftExpert


Desafio Frontend SoftExpert
Este repositório contém a implementação do frontend para o desafio SoftExpert. O projeto foi desenvolvido utilizando Angular, fornecendo uma interface dinâmica e interativa para interação com a API do desafio Backend SoftExpert.

## Principais Tecnologias Utilizadas

Este projeto foi criado com Angular versão 12.2.18, Node.js 12.22.12, e NPM 6.14.16

## Requisitos

Para construir e rodar esta API, você precisará de:

- Docker

## Construção da Imagem Docker <img src="https://github.com/Exorty/desafio-backend-softexpert/assets/43776020/2a13fd53-8b16-45e2-94ad-416c68fa93ec" width="30" height="30">  

Para construir uma imagem Docker desta API, execute o seguinte comando no diretório raiz do projeto:

```bash
docker build -t softexpert-desafio-frontend-miller:1.0 .
````
## Rodando a Aplicação com Docker  <img src="https://github.com/Exorty/desafio-backend-softexpert/assets/43776020/2a13fd53-8b16-45e2-94ad-416c68fa93ec" width="30" height="30">  

Com a imagem construída, você pode executar a aplicação utilizando o comando:
```bash
docker run -p 4200:80 softexpert-desafio-frontend-miller:1.0
```
Este comando iniciará um contêiner Docker baseado na imagem construída anteriormente, redirecionando a porta 80 do contêiner para a porta 4200 do seu host. Isso permite acessar a aplicação através do endereço http://localhost:4200.

## Documentação   <img src="https://github.com/Exorty/desafio-backend-softexpert/assets/43776020/854d0092-6543-4a8b-8fe6-35cb4f374f46" width="30" height="30">
Para detalhes sobre a interação com a API do desafio Backend SoftExpert, consulte a documentação disponível através da interface Swagger, acessível no endereço fornecido após a execução do backend.

Repositório do back-end: https://github.com/Exorty/desafio-backend-softexpert
