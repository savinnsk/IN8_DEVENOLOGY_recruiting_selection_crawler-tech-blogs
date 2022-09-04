import "reflect-metadata"
import {Router} from "express"
import { UsersRoutes } from "./users.routes"
import { authenticateRoutes } from "./authenticate.routes"


const router = Router()


router.use("/users" , UsersRoutes)
router.use("/sessions" , authenticateRoutes)

export {router}