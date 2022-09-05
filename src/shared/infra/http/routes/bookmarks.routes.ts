import { Router } from "express";
import { CreateBookMarkController } from "../../../../modules/bookmarksLinks/usecases/createBookMark/CreateBookMarkController";
import { DeleteBookmarkController } from "../../../../modules/bookmarksLinks/usecases/deleteBookmarks/deleteBookMarkController";
import { EditBookMarkController } from "../../../../modules/bookmarksLinks/usecases/editBookMark/EditBookMarkController";
import { ensureUserAuthenticated } from "../../../middlewares/ensureUserAuthenticate";

const bookmarksRoutes = Router()

const createBookMarkController = new CreateBookMarkController()
const deleteBookmarkController = new DeleteBookmarkController()
const editBookMarkController = new EditBookMarkController()

bookmarksRoutes.post("/create" , ensureUserAuthenticated,createBookMarkController.handle)
bookmarksRoutes.delete("/delete" , ensureUserAuthenticated , deleteBookmarkController.handle)
bookmarksRoutes.put("/edit" , ensureUserAuthenticated ,editBookMarkController.handle )

export {bookmarksRoutes}