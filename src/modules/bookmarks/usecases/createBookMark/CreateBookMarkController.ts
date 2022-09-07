import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateBookMarkUseCase } from "./CreateBookMarkUseCase";


class CreateBookMarkController{

    async handle(request  , response : Response) {
    
    const user_id = request.user.id
    const {link , label} = request.body    
        
    const createBookMarkUseCase = container.resolve(CreateBookMarkUseCase)

    const bookmark = await createBookMarkUseCase.execute(user_id , link , label)

    return response.status(201).json({
        message:`bookmark ${bookmark} was created with success`
    })


    }
}

export {CreateBookMarkController}