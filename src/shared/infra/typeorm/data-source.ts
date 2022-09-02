import "reflect-metadata"
import "dotenv/config";

import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: process.env.ORM_TYPE,
    host: process.env.ORM_HOST,
    port: process.env.ORM_PORT,
    username: process.env.ORM_USERNAME,
    password: process.env.ORM_PASSWORD,
    database: process.env.ORM_DATABASE,
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
})
