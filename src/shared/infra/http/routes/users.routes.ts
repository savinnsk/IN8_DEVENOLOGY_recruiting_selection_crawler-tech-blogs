import { Request, Response,Router } from "express";
import { CreateUserController } from "../../../../modules/users/usecases/createUser/CreateUserController";

const UsersRoutes = Router();
const multer = require("multer")
const upload = multer({ dest: 'uploads/' })

const createUserController = new CreateUserController()

UsersRoutes.get("/create" , (request : Request , response : Response)=>{
    response.render("users/create")
})

UsersRoutes.post("/create" , 
upload.fields([{ name: 'name', password : 'password' }]),
 createUserController.handle )

export {UsersRoutes}