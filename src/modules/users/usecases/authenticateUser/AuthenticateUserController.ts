import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController{

    async handle(request : Request , response : Response) : Promise<any>{

    try{    

        const {name , password} = request.body

        const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)

        const token = await authenticateUserUseCase.execute(name , password);

        return response.render('index' , {user : token.user , token : token.token })

    }catch{

        return response.status(400).send(new Error("Server Error"))
    }
    }
}

export {AuthenticateUserController}