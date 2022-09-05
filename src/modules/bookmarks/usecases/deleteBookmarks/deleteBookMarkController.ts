import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteBookMarkUseCase } from "./deleteBookMarkUseCase";

class DeleteBookmarkController {
    
    async handle(request , response : Response){

        const bookmark_id = request.params.id
        const user_id = request.user.id

        const deleteBookMarkUseCase = container.resolve(DeleteBookMarkUseCase)

        await deleteBookMarkUseCase.execute(user_id , bookmark_id )

        return response.status(201).json({
            message:"bookmark was deleted with success"
        })

    }
}

export {DeleteBookmarkController}