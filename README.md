# Testes de API e Contrato com Cypress + CI em GitHub Actions
## Agilizei Bootcamp Cypress Desafio N4
---
Projeto desenvolvido para o desafio Nº4 do Agilizei Bootcamp.

## :books: Conceitos Apresentados no Módulo
- Testes de API com verbos GET, POST, PUT e DELETE;
- Teste de Contrato
- Teste de Healthcheck
- Asserções
- Asserções de contrato com puglin cy-spok
- Definindo variáveis de ambiemte com Cypress.env
- Definição da Arquitetura e Refatoração dos Scripts
- Filtrando a execução dos testes utilizando tags, por meio do puglin cypress-select-tests 
- CI com GitHub Actions
## :hammer_and_wrench: Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/)
- [Node.js](https://nodejs.org/en/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

 ## Cenários :white_check_mark:
 ### Teste de Contrato
 - [x] Validar o contrato do GET Booking
 ### Teste healthcheck
 - [x] Validar que a aplicação está no ar
 ### Teste de Api
- [x] Criar uma Reserva com sucesso 
- [x] Tentar alterar uma reserva sem token
- [x] Alterar uma reserva com sucesso
- [x] Alterar uma reserva inexistente
- [x] Alterar uma reserva com token invalido
- [x] Excluir uma reserva com sucesso
- [x] Excluir uma reserva Inexistente
- [x] Excluir uma reserva sem token
- [x] Excluir uma reserva com token invalido
## Começando 💻

### Pré-requisitos ⚙️ ###
Instalar as seguintes ferramentas:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [Cypress](https://cypress.io/)
- Algum editor de código-fonte como [VSCode](https://code.visualstudio.com/)


```ruby
# Clone este repositório
$ git clone <https://github.com/reneeazevedo/agilizeibootcamp-cypress-desafioN4>

# Acesse a pasta do projeto no terminal/cmd
$ cd "pasta do projeto"

# Instale as dependências
$ npm install

# Execute a aplicação no navegador
$ npm run cy:open
# Execute a aplicação em modo headless
$ npm run test
# Execute em modo headless somente os testes com a tag @healthcheck
$ npm run test:healthcheck
# Execute em modo headless somente os testes com a tag @contract
$ npm run test:contract
# Execute em modo headless somente os testes com a tag @functional
$ npm run test:functional

```

## ▶️ Testes em Execução
![apiTesting](https://user-images.githubusercontent.com/52136006/116127369-1f978780-a69e-11eb-8ac6-569fa51247ec.gif)


## ▶️ Testes em Execução GitHub Actions
![apiTestingGHActions](https://user-images.githubusercontent.com/52136006/116130848-15778800-a6a2-11eb-9f1d-a49580537cc4.gif)

## :link: CI com Github Actions :link:
https://github.com/reneeazevedo/agilizeibootcamp-cypress-desafioN4/actions/runs/786539267

##
Feito por <a href="https://www.linkedin.com/in/ren%C3%A9e-moura-ctfl-ctal-tae-ctfl-at-85b90a13a/">Renée Azevedo</a> :wave: Entre em contato!

[![Github](https://img.shields.io/badge/-Github-595D60?style=flat-square&logo=Github&logoColor=white&link=https://github.com/reneeazevedo/)](https://github.com/reneeazevedo)
[![Linkedin](https://img.shields.io/badge/-LinkedIn-595D60?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/ren%C3%A9e-moura-ctfl-ctal-tae-ctfl-at-85b90a13a/)](https://www.linkedin.com/in/ren%C3%A9e-moura-ctfl-ctal-tae-ctfl-at-85b90a13a/)
[![Gmail](https://img.shields.io/badge/-Gmail-595D60?style=flat-square&logo=Gmail&logoColor=white&link=mailto:renee.azevedosys@gmail.com/)](mailto:renee.azevedosys@gmail.com/)
