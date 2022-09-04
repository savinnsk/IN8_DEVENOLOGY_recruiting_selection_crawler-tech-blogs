import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController{

    async handle(request : Request , response : Response) : Promise<Response>{

        const {name , password} = request.body

        const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)

        const token = await authenticateUserUseCase.execute(name , password);

        return response.status(200).json(token);
    }
}

export {AuthenticateUserController}