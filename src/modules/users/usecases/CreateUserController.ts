import { Response , Request } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController{

    async handle(request : Request , response : Response):Promise<Response>{

        const {name , password} = request.body

        const createUserUseCase = container.resolve(CreateUserUseCase)

        const user = createUserUseCase.execute(name , password) 

        return response.status(201).json({
            message : `${user} was created with success`
        })

    }
}

export {CreateUserController}