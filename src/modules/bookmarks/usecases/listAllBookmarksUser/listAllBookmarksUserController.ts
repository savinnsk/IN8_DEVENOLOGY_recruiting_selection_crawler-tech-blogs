import { Response } from "express";
import { container } from "tsyringe";
import { ListAllBookmarksUserUseCase } from "./listAllBookmarksUserUseCase";

class ListAllBookmarksUserController {

    async handle(request , response : Response) : Promise<Response> {

     try{
        const {id} = request.params
        const  listAllBookmarksUserUseCase = container.resolve(ListAllBookmarksUserUseCase)

        const bookmarks = await listAllBookmarksUserUseCase.execute(id)

    
        return response.status(200).json(
             bookmarks 
        )

    }catch{

        return response.status(400).send(new Error("Server Error"))
    }
}
}


export {ListAllBookmarksUserController}