import { Response , Request } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController{

    async handle(request : Request , response : Response):Promise<any>{

    try{

        const {name , password} = request.body

        const createUserUseCase = container.resolve(CreateUserUseCase)

        const user = await createUserUseCase.execute(name  , password) 


        return  response.render("users/welcome" , {user : user} )

    }catch(err){
        
        return response.status(500).send(new Error("Server Error"))
    }

    }
}

export {CreateUserController}