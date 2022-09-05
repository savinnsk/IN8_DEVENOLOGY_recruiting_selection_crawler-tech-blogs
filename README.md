# api-fav-links

**description:** api created to make a bookmark for technologies links

### status : (developing)

## technologies used

- [ExpressJs](https://expressjs.com/)
- [Docker](https://www.docker.com/)
- [NodeJS](https://nodejs.org/pt-br/)
- [TypeOrm]
- [Postgres-Sql](https://www.postgresql.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jwt]
- [tsrynge]

## How to Download and Run the project

#### Required:

- [Docker](https://www.docker.com/)

- **Table Data Base required "api-fav-blogs"**


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

$ cp .env.example .env

# Start all the services and the application with Docker Compose
$ docker-compose up -d

# Once the services are running, run the migrations
$ yarn migration:run


# Well done, project is started!
```

####  example env variables..

ORM_USERNAME=postgres
ORM_HOST=localhost
ORM_PASSWORD=admin
ORM_DATABASE=api-fav-blogs


## ENDPOINTS


**Desenvolvido por:** [Savio Picanço Do Espirito Santo Brito](https://www.linkedin.com/in/savio-pican%C3%A7o-b739a518a/)


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
