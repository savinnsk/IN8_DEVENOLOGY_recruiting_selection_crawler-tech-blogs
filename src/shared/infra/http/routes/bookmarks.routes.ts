import { Router } from "express";
import { CreateBookMarkController } from "../../../../modules/bookmarksLinks/usecases/createBookMark/CreateBookMarkController";
import { ensureUserAuthenticated } from "../../../middlewares/ensureUserAuthenticate";

const bookmarksRoutes = Router()

const createBookMarkController = new CreateBookMarkController()

bookmarksRoutes.post("/create" , ensureUserAuthenticated,createBookMarkController.handle)

export {bookmarksRoutes}