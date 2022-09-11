import { Request, Response, Router } from "express";
import { AuthenticateUserController } from "../../../../modules/users/usecases/authenticateUser/AuthenticateUserController";
import { upload } from "../../../middlewares/multer";

const viewRoutes = Router()


const authenticateUserController = new AuthenticateUserController()

viewRoutes.get("/" , (request : Request ,  response : Response ) =>{
    response.render("index")
})

viewRoutes.get("/users/create" , (request : Request ,  response : Response ) =>{
    response.render("users/create")
})


export {viewRoutes}