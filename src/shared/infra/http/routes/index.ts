import "reflect-metadata"
import {Router} from "express"
import { UsersRoutes } from "./users.routes"


const router = Router()


router.use("/users" , UsersRoutes)

export {router}