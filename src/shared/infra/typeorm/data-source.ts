import "reflect-metadata"
import "dotenv/config";
import { DataSource } from "typeorm"

import { CreateUser1662114653369 } from "./migrations/1662114653369-CreateUser";
import { User } from "../../../modules/users/infra/typeorm/entity/User";
import { CreateBookmarksLinks1662304783282 } from "./migrations/1662304783282-CreateBookmarksLinks";

 const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.ORM_HOST,
    port: 5432,
    username: process.env.ORM_USERNAME,
    password: process.env.ORM_PASSWORD,
    database: process.env.ORM_DATABASE,
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [
        CreateUser1662114653369,
        CreateBookmarksLinks1662304783282
    ],
    subscribers: [],
})

export {AppDataSource}
