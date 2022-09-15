import { Response , Request } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController{

    async handle(request : Request , response : Response):Promise<any>{

    try{

        const {name , password , email} = request.body

        const createUserUseCase = container.resolve(CreateUserUseCase)

        const user = await createUserUseCase.execute(name  , password , email) 

        if(!user){
            return response.status(500).json({
                statusCode:500,
                message:"Server Error"
            })
        }

        return  response.render("users/login")

    }catch(err){
        
        return response.status(500).send(new Error("Server Error"))
    }

    }
}

export {CreateUserController}