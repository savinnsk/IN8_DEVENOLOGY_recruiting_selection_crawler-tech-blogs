import { Router } from "express";
import { CreateBookMarkController } from "../../../../modules/bookmarks/usecases/createBookMark/CreateBookMarkController";
import { DeleteBookmarkController } from "../../../../modules/bookmarks/usecases/deleteBookmarks/deleteBookMarkController";
import { EditBookMarkController } from "../../../../modules/bookmarks/usecases/editBookMark/EditBookMarkController";
import { ListAllBookmarksUserController } from "../../../../modules/bookmarks/usecases/listAllBookmarksUser/listAllBookmarksUserController";
import { ensureUserAuthenticated } from "../../../middlewares/ensureUserAuthenticate";

const bookmarksRoutes = Router()

const createBookMarkController = new CreateBookMarkController()
const deleteBookmarkController = new DeleteBookmarkController()
const editBookMarkController = new EditBookMarkController()
const listAllBookmarksUserController = new ListAllBookmarksUserController()



const multer = require("multer")
const upload = multer({ dest: 'uploads/' })


bookmarksRoutes.post("/create" ,
upload.fields([{ name: 'label', link : 'link' , token :'token' , id : 'id' }]), 
ensureUserAuthenticated,createBookMarkController.handle)

bookmarksRoutes.delete("/delete/:id" , ensureUserAuthenticated , deleteBookmarkController.handle)
bookmarksRoutes.put("/edit/:id" , ensureUserAuthenticated ,editBookMarkController.handle )
bookmarksRoutes.get("/list" , ensureUserAuthenticated , listAllBookmarksUserController.handle)

export {bookmarksRoutes}