
import { Router } from "express";
import { CreateUserController } from "../../../../modules/users/usecases/createUser/CreateUserController";
const UsersRoutes = Router();


const createUserController = new CreateUserController()

UsersRoutes.post("/create" , createUserController.handle )

export {UsersRoutes}