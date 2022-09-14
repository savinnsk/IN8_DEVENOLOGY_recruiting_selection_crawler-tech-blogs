import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../../users/interfaces/IUsersRepository";
import { Bookmark } from "../../infra/entity/Bookmark";
import { IBookmarksRepository } from "../../interfaces/IBookmarksLinksRepository";

@injectable()
class CreateBookMarkUseCase {

    constructor(
        @inject("BookmarksRepository")
        private bookmarksLinksRepository :  IBookmarksRepository,

        @inject("UsersRepository")
        private usersRepository : IUsersRepository
    ){}

    async execute(user_id: string , label : string , link : string ) : Promise<Bookmark[]>{

        const user = await this.usersRepository.findById(user_id);

        if(!user){
            throw new Error("User doesn't exists")
        }

        await this.bookmarksLinksRepository.create(user_id , link ,label)
        const bookmarks = await this.bookmarksLinksRepository.getAll(user_id)

        return bookmarks

    }
}


export {CreateBookMarkUseCase}