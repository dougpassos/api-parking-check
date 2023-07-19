# API Parking Check

API para controle de entradas e saidas de veiculos em estacionamentos

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

```
Node.js
VScode ou outro editor de codigo
git
```

### 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

Clonar o repositorio:

```
git clone https://github.com/dougpassos/api-parking-check
```

Instalar dependencias:

```
npm install
```


Termine com um exemplo de como obter dados do sistema ou como usá-los para uma pequena demonstração.

## 📦 Implantação

Adicione notas adicionais sobre como implantar isso em um sistema ativo

### Arquivo de configuração de ambiente

Criar um arquivo .env

```
touch .env
```

Este arquivo deve conter as configurações de porta e conexão com o banco de dados MongoDB.

```
PORT=<NUMBER>
CONNECT_DB=<STRING>

### exemplo preenhido ###

PORT=0000
CONNECT_DB=""mongodb+srv://user:password@URLMongoDB/"
```

### MongoDB Atlas - Cloud

Foi utilizado o MongoDB Atlas, um serviço em nuvem de banco de dados.

https://www.mongodb.com/cloud/atlas/register

## Exemplo de chamadas

O exemplo de chamadas da api encontra-se no arquivo [request.rest](src/docs/request.rest)


## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [node.js](https://nodejs.org/en) - Ambiente de execução JavaScript
* [express](https://expressjs.com/) - O framework web para Node.js
* [Mongoose](https://mongoosejs.com/) - modelagem  de objetos mongodb para node.js
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) - Banco de dados Mongo Cloud


## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Douglas Passos** - *Desenvolvimento e documentação* - [dougpassos ](https://github.com/dougpassos)


