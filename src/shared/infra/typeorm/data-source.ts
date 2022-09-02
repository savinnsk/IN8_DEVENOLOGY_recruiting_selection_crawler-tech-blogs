import "reflect-metadata"
import "dotenv/config";

import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.ORM_HOST,
    port: 5432,
    username: process.env.ORM_USERNAME,
    password: process.env.ORM_PASSWORD,
    database: process.env.ORM_DATABASE,
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
})
