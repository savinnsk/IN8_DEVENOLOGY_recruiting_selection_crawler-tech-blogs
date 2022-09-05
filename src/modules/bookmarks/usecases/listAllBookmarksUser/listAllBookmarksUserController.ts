import { Response } from "express";
import { container } from "tsyringe";
import { ListAllBookmarksUserUseCase } from "./listAllBookmarksUserUseCase";

class ListAllBookmarksUserController {

    async handle(request , response : Response) : Promise<Response> {

        const user_id = request.user.id

        const  listAllBookmarksUserUseCase = container.resolve(ListAllBookmarksUserUseCase)

        const bookmarks = await listAllBookmarksUserUseCase.execute(user_id)


        return response.status(200).json({
            bookmarks:bookmarks
        })
    }
}


export {ListAllBookmarksUserController}