import { Response } from "express";
import { container } from "tsyringe";
import { EditBookMarkUseCase } from "./EditBookMarkUseCase";

class EditBookMarkController{

    async handle(request , response : Response) : Promise<any>{

        const {user_id} = request.params
        const {bookmark_id} = request.params
        const {label , link} = request.body

        const editBookMarkUseCase = container.resolve(EditBookMarkUseCase);

        await editBookMarkUseCase.execute(user_id , bookmark_id , label , link)


          const responseJson = {
            statusCode : 200,
            message:`${link} was edited with success`
        }
         return response.render("bookmarks/bookmarks")

      

       
    }
}

export {EditBookMarkController}