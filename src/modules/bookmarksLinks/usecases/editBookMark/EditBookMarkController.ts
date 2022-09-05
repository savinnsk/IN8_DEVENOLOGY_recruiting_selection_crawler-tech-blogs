import { Response } from "express";
import { container } from "tsyringe";
import { EditBookMarkUseCase } from "./EditBookMarkUseCase";

class EditBookMarkController{

    async handle(request , response : Response) : Promise<Response>{

        const user_id = request.user.id
        const bookmark_id = request.params.id
        const {title} = request.body

        const editBookMarkUseCase = container.resolve(EditBookMarkUseCase);

        await editBookMarkUseCase.execute(user_id , bookmark_id , title)

        return response.status(201).json({
            message:`${title} was edited with success`
        })
    }
}

export {EditBookMarkController}