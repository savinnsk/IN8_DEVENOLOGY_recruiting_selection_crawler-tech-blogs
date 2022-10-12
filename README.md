# api-fav-links

# [Acess the aplication link (deploy )](https://deploy.savinnsk.com/)

**description:** api created to make a bookmark for technologies links

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=api-FavLinks&uri=https%3A%2F%2Fgithub.com%2Fsavinnsk%2Fapi-fav-blog-links%2Fblob%2Fmain%2Finsomia.json)




### status : (developing)

## technologies used

- [ExpressJs](https://expressjs.com/)
- [Docker](https://www.docker.com/)
- [NodeJS](https://nodejs.org/pt-br/)
- TypeOrm
- [Postgres-Sql](https://www.postgresql.org/)
- [TypeScript](https://www.typescriptlang.org/)
- Jwt
- tsrynge
- github actions CI/CD
- babel
- NGIX
- AWS cloud
- PM2 
- router53
- certbot 
- google domain

* The Aplication is hosted at AWS CLOUD ubunto 20.04 instance
* The Data Base postgres is running in a docker instance
* The Application has a certificate https from certbot
* The applicaiton has continious integration and continuous delivery CI/CD


## How to Download and Run the project

## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button.


### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)

**Clone the project and access the folder**

```bash
git clone https://github.com/savinnsk/fav-blog-links.git && cd fav-blog-links
```

**Follow the steps below**

```bash
# Install the dependencies

$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.

$ mv .env.exemple .env

$ SHOULD HAVE A DATABASE CALLED api-fav-blogs

# Once the services are running, run the migrations
$ yarn typeorm migration:run -d src/shared/infra/typeorm/data-source.ts



# Start all the services and the application with Docker Compose
$ sudo docker-compose up -d



# Well done, project is started!
```

####  example env variables..

```zsh
#ORM AND DATABASE

ORM_USERNAME=postgres
ORM_HOST=localhost
ORM_PASSWORD=admin
ORM_DATABASE=api-fav-blogs


#AUTHENTICATE JWT

USER_SECRET_TOKEN=batata
```

To run test

```zsh
yarn test
```


## USER ENDPOINTS

### Create a new user

**endpoint: http://localhost:5000/users/create**

method: **POST**

**request body** 


```zsh

- properties : {

    - name : string 
    - password : string
    - email: string     
}
```


### Authentication user


**endpoint: http://localhost:5000/sessions**

method: **POST**

**request body**

```zsh

- properties : {
    
    - name : string 
    - password : string     
}
```

## Bookmarks endpoint


### Create a new bookmark

endpoint: http://localhost:5000/bookmarks/create

method: POST

__Authentication required__


**request headers**

```zsh
- token

    -type : jsonwebtoken 
```

**request body** 

```zsh

    - properties {

         - label : string 
         - link : string   
    }     
```


### Delete a bookmark

**endpoint: https://deploy.savinnsk.com/bookmarks/delete/{id}**

method: **DELETE**


**request params**

```zsh
- user_id
- bookmark_id
```

**Response 201**

{
    render to page create a bookmark    
}


## Edit a bookmark

**endpoint: http://localhost:5000/bookmarks/edit/{id}**

method: **PUT**

__Authentication required__

**request headers**

```zsh
- token

    -type : jsonwebtoken 

```

**request params**

```zsh
- id
```

**request body** 

```zsh
    - properties {

         - label : string 
         - link : string   
    }     

```


##Get All bookmarks

**endpoint: https://deploy.savinnsk.com/bookmarks/list/user_id**

method: **GET**

**request params**

```zsh

user_id

  -type : string   
```

**Response 200**

```zsh

Array bookmarks

  -type : Object[bookmarks]

```

**Developed for:** [Savio Picanço Do Espirito Santo Brito](https://www.linkedin.com/in/savio-pican%C3%A7o-b739a518a/)


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
