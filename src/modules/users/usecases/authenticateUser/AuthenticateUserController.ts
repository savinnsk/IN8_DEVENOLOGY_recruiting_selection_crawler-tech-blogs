import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController{

    async handle(request : Request , response : Response) : Promise<any>{

    try{    

        const {email , password} = request.body

        const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)

        const token = await authenticateUserUseCase.execute(email , password);

        if(!token){
            return response.status(500).json({
                statusCode:500,
                message:"Server Error"
            })}

        return response.render('bookmarks/create' , {user : token.user , token : token.token })

    }catch{

        return response.status(400).send(new Error("Server Error"))
    }
    }
}

export {AuthenticateUserController}