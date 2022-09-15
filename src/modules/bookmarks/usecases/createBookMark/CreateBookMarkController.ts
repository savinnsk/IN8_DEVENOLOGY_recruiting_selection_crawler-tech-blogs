import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateBookMarkUseCase } from "./CreateBookMarkUseCase";


class CreateBookMarkController{

    async handle(request  , response : Response) {
    
    try{
        const user_id = request.user.id
        const {label , link } = request.body    
            
        const createBookMarkUseCase = container.resolve(CreateBookMarkUseCase)

        const bookmarks = await createBookMarkUseCase.execute(user_id, label ,link)

        //return response.status(201).json({
            //message:`bookmark ${bookmark} was created with success`
   // })

   return response.render("bookmarks/create" , {message : "Bookmark created with success" , bookmarks })

    }catch{

        return response.status(400).send(new Error("Server Error"))

    }

    }
}

export {CreateBookMarkController}