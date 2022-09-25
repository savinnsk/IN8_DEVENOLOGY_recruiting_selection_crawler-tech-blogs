import { Response } from "express";
import { container } from "tsyringe";
import { EditBookMarkUseCase } from "./EditBookMarkUseCase";

class EditBookMarkController{

    async handle(request , response : Response) : Promise<Response>{

        const {user_id} = request.params
        const {bookmark_id} = request.params
        const {label , link} = request.body

        const editBookMarkUseCase = container.resolve(EditBookMarkUseCase);

        await editBookMarkUseCase.execute(user_id , bookmark_id , label , link)

        return response.status(201).json({
            message:`${link} was edited with success`
        })
    }
}

export {EditBookMarkController}