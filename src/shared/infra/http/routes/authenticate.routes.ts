
import { Response, Request,Router } from "express";
import { AuthenticateUserController } from "../../../../modules/users/usecases/authenticateUser/AuthenticateUserController";
import { upload } from "../../../middlewares/multer";

const authenticateRoutes = Router()

const authenticateUserController = new AuthenticateUserController()

authenticateRoutes.get("/", (request : Request , response : Response ) =>{
    
    response.render("login")
})
authenticateRoutes.post('/' , 
upload.fields([{ name: 'name', password : 'password' }]),
authenticateUserController.handle)

export {authenticateRoutes}
