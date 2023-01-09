<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## API REFERENCE

### GETTING STARTED

- Base URL: At present this app can only be run locally and is not hosted as a base URL. The backend app is hosted at the default, `http://localhost:3000/`.
- Authentication: This version of the application does not require authentication or API keys

## ENDPOINTS

### AUTHENTICATION AND AUTHORIZATION ENDPOINTS

- To satisfy the authorization requirement of this project - that is, only role ADMIN should be able to hit the main addon and addon-category endpoints. This endpoint is for users authentication and authorization, I decied to create enpoints to this effect.

#### POST /users

- General:

  - Creates a new user using the submitted fields(name, description, price, category)

    Sample: curl -X POST -H "Content-Type: application/json" -d '{"email": "ojcollins@gmail.com", "password": "12345","first_name": "OJ", "last_name": "Collins", "role": "admin"}' http://localhost:3000/users
    {
    "email": "ojcollins@gmail.com",
    "password": "$2b$10$aCwKuAE5sG4mfkvLbJ/SpuDoB3RJC8GGhs0beUTt7niEOIDZbi1p.",
    "first_name": "OJ",
    "last_name": "Collins",
    "role": "admin",
    "id": 6
    }

#### GET /users

- General:
  - Returns an array of registered users
    Sample: curl http://localhost:3000/users
    [
    {
    "id": 1,
    "password": "$2b$10$4ggxDMsYlLBiHln4CStX7.lTdpefr2bRPBJnslTk6pOWsNJh8vDkG",
    "first_name": "Ken",
    "last_name": "Ken",
    "email": "ken@gmail.com",
    "role": "admin"
    },
    {
    "id": 3,
    "password": "$2b$10$9fDwSjhtHU2qx/NTaARg1Ot1Sroh6c/b.DJN3kLvlBfw0mQVcQzdG",
    "first_name": "Seyi",
    "last_name": "Seyi",
    "email": "seyi@gmail.com",
    "role": "user"
    },
    {
    "id": 6,
    "password": "$2b$10$aCwKuAE5sG4mfkvLbJ/SpuDoB3RJC8GGhs0beUTt7niEOIDZbi1p.",
    "first_name": "OJ",
    "last_name": "Collins",
    "email": "ojcollins@gmail.com",
    "role": "admin"
    }
    ]

#### POST /auth/login

- General:

  - Login A registered user. This generates and return a token

    Sample: curl -X POST -H "Content-Type: application/json" -d '{"username": "ken@gmail.com", "password": "12345"}' http://localhost:3000/auth/login
    {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtlbkBnbWFpbC5jb20iLCJzdWIiOjEsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY3MzI3ODYyMX0.RfPagqE-krTvZ4o3Ppqy5kyYHYbsyY_UPpklZrSigQU"
    }

### BRANDS ENDPOINTS

- To satisfy the requirement of this project - that is the necessity to add addons and addon-categories to specified brands, I decided to create endpoints to that effect. Therefore, before the addons endpoint can be hit, it is best to create some brand using the endpoint below

#### POST /brands

- General:

  - Creates a new brand with a single field(name)

    Sample: curl -X POST -H "Content-Type: application/json" -d '{"name":"Isoko Dish"}' http://localhost:3000/brands
    {
    "name": "Isoko Dish",
    "id": 5
    }

#### GET /brands

- General:
  - Returns an array of created brands
    Sample: curl http://localhost:3000/brands
    [
    {
    "id": 1,
    "name": "Local Dish"
    },
    {
    "id": 2,
    "name": "Asian Dish"
    },
    {
    "id": 5,
    "name": "Isoko Dish"
    }
    ]

#### GET /brands/:brandId

- General:
  - Returns a single brand as an object
    Sample: curl http://localhost:3000/brands/5
    {
    "id": 5,
    "name": "Isoko Dish"
    }

### ADDON ENDPOINT

#### POST /brands/:brandId/addons

- General:

  - Creates a neaw meal addon for the specified brand using the submitted fields(name, description, price, category)

        Sample: curl -X POST -H "Content-Type: application/json" -d '{"name":""Avocados, "description":"Avocados are native to the Western Hemisphere from Mexico south to the Andean regions and are widely grown in warm climates", "price":5000, "category":"Desert"}' http://localhost:3000/brands/1/addons
        {
        "name": "Avocados",
        "price": 5000,
        "description": "Avocados are native to the Western Hemisphere from Mexico south to the Andean regions and are widely grown in warm climates",
        "category": "Desert",
        "brand_id": "1",
        "id": 10

    }

#### GET /brands/:brandId/addons

- General:
  - Returns an array of all meal addons for a specified brand
    Sample: curl http://localhost:3000/brands/1/addons
    [
    {
    "id": 8,
    "name": "Caleb Myammar",
    "description": "My Person",
    "price": 1000,
    "category": "Local Dish",
    "brand_id": 1
    },
    {
    "id": 10,
    "name": "Avocados",
    "description": "Avocados are native to the Western Hemisphere from Mexico south to the Andean regions and are widely grown in warm climates",
    "price": 5000,
    "category": "Desert",
    "brand_id": 1
    }
    ]

#### GET /brands/:brandId/addons/:addonId

- General:
  - Retrieves a single addon by its ID for a specified brand
    Sample: curl http://localhost:3000/brands/1/addons/10
    {
    "id": 10,
    "name": "Avocados",
    "description": "Avocados are native to the Western Hemisphere from Mexico south to the Andean regions and are widely grown in warm climates",
    "price": 5000,
    "category": "Desert",
    "brand_id": 1
    }

#### PATCH /brands/:brandId/addons/:addonId

- General:
  - Update a single meal addon by its ID for the specified brand
    Sample:curl -X PATCH -H "Content-Type: application/json" -d '{"price":2000}' http://localhost:3000/brands/1/addons/10
    {
    "id": 10,
    "name": "Avocados",
    "description": "Avocados are native to the Western Hemisphere from Mexico south to the Andean regions and are widely grown in warm climates",
    "price": 2000,
    "category": "Desert",
    "brand_id": 1
    }

#### DELETE /brands/:brandId/addons/:addonId

- General:
  - Update a single meal addon by its ID for the specified brand
    Sample: curl -X DELETE http://localhost:3000/brands/1/addons/8
    {
    "msg": "Caleb Myammar was Successfully Deleted"
    }

### ADDON-CATEGORY ENDPOINT

#### POST /brands/:brandId/addon-categories

- General:

  - Creates a new category for meal addons for specified brand with a submitted field(name)

    Sample: curl -X POST -H "Content-Type: application/json" -d '{"name":"Salads"}' http://localhost:3000/brands/1/addon-categories
    {
    "name": "Salads",
    "brand_id": "1",
    "id": 4
    }

#### GET /brands/:brandId/addons

- General:
  - Returns an array of all meal addons categories for a specified brand
    Sample: curl http://localhost:3000/brands/1/addons
    [
    {
    "id": 1,
    "name": "Local Dish",
    "brand_id": 1
    },
    {
    "id": 3,
    "name": "Esan Dish",
    "brand_id": 1
    },
    {
    "id": 4,
    "name": "Salads",
    "brand_id": 1
    }
    ]
