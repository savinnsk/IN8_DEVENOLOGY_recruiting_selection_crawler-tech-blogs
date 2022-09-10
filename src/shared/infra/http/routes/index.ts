import "reflect-metadata"
import {Response, Request,Router} from "express"
import { UsersRoutes } from "./users.routes"
import { authenticateRoutes } from "./authenticate.routes"
import { bookmarksRoutes } from "./bookmarks.routes"
import { viewRoutes } from "./views.routes"

const router = Router()

router.use("/users" , UsersRoutes)
router.use("/sessions" , authenticateRoutes)
router.use("/bookmarks" , bookmarksRoutes)
router.use("/" , viewRoutes)

export {router}