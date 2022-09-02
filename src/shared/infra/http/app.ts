import * as express from "express"
import {router} from "./routes"
import "reflect-metadata"

const app = express();
app.use(express.json());
app.use(router)

export {app}