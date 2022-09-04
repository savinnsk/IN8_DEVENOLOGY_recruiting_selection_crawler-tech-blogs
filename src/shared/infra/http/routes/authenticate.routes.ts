import { Router } from "express";
import { AuthenticateUserController } from "../../../../modules/users/usecases/authenticateUser/AuthenticateUserController";

const authenticateRoutes = Router()

const authenticateUserController = new AuthenticateUserController()

authenticateRoutes.post('/sessions' , authenticateUserController.handle)