import { Router } from "express";
import { CreateBookMarkController } from "../../../../modules/bookmarksLinks/usecases/createBookMark/CreateBookMarkController";
import { DeleteBookmarkController } from "../../../../modules/bookmarksLinks/usecases/deleteBookmarks/deleteBookMarkController";
import { ensureUserAuthenticated } from "../../../middlewares/ensureUserAuthenticate";

const bookmarksRoutes = Router()

const createBookMarkController = new CreateBookMarkController()
const deleteBookmarkController = new DeleteBookmarkController()

bookmarksRoutes.post("/create" , ensureUserAuthenticated,createBookMarkController.handle)
bookmarksRoutes.delete("/delete" , ensureUserAuthenticated , deleteBookmarkController.handle)

export {bookmarksRoutes}