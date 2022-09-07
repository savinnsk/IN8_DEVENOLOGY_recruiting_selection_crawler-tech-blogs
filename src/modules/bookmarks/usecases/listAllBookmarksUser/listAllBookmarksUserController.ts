import { Response } from "express";
import { container } from "tsyringe";
import { ListAllBookmarksUserUseCase } from "./listAllBookmarksUserUseCase";

class ListAllBookmarksUserController {

    async handle(request , response : Response) : Promise<Response> {

     try{
        const user_id = request.user.id

        const  listAllBookmarksUserUseCase = container.resolve(ListAllBookmarksUserUseCase)

        const bookmarks = await listAllBookmarksUserUseCase.execute(user_id)


        return response.status(200).json({
            bookmarks:bookmarks
        })

    }catch{

        return response.status(400).send(new Error("Server Error"))
    }
}
}


export {ListAllBookmarksUserController}