import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteBookMarkUseCase } from "./deleteBookMarkUseCase";

class DeleteBookmarkController {
    
    async handle(request , response : Response){

    
    try{
        const bookmark_id = request.body.id_bookmark
        const user_id = request.user.id

        const deleteBookMarkUseCase = container.resolve(DeleteBookMarkUseCase)

        await deleteBookMarkUseCase.execute(user_id , bookmark_id )
        
        const Response = {
            statusCode: 201,
            message:"bookmark was deleted with success" 
        }
          return response.render("bookmarks/create")

    }catch{
        return response.status(400).send(new Error("Server Error"))
    }
    }
}

export {DeleteBookmarkController}