import { Router } from "express";
import { CreateUserController } from "../../../../modules/users/usecases/createUser/CreateUserController";

const UsersRoutes = Router();
const multer = require("multer")
const upload = multer({ dest: 'uploads/' })

const createUserController = new CreateUserController()

UsersRoutes.post("/create" , 
upload.fields([{ name: 'name', password : 'password' }]),
 createUserController.handle )

export {UsersRoutes}