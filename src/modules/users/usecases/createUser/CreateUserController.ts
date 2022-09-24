import { Response , Request } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController{

    async handle(request : Request , response : Response):Promise<any>{

    try{

        const {name , password , email} = request.body

        const createUserUseCase = container.resolve(CreateUserUseCase)

        await createUserUseCase.execute(name  , password , email) 

        
        
    }catch(err){
        
        return response.send({
                statusCode:500,
                message:"Server Error"})

        }finally{
            return  response.render("users/login")

        }
}
}

export {CreateUserController}