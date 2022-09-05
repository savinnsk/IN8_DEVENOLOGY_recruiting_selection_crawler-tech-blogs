
import { Request, Response,Router } from "express";
import { CreateUserController } from "../../../../modules/users/usecases/createUser/CreateUserController";
const UsersRoutes = Router();


const createUserController = new CreateUserController()

UsersRoutes.get("/create" , (request : Request , response : Response)=>{
    response.render("users/create")
})

UsersRoutes.post("/create" , createUserController.handle )

export {UsersRoutes}