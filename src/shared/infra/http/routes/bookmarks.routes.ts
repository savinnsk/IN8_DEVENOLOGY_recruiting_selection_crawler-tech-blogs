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

//changed to post 
bookmarksRoutes.post("/delete/:bookmark_id/:user_id",deleteBookmarkController.handle)

bookmarksRoutes.post("/edit/:bookmark_id/:user_id" ,
upload.fields([{ label: 'label', link : 'link'}]),
editBookMarkController.handle)

bookmarksRoutes.get("/list/:id"  , listAllBookmarksUserController.handle)

export {bookmarksRoutes}