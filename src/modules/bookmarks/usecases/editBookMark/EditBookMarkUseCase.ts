import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../../users/interfaces/IUsersRepository";
import { IBookmarksRepository } from "../../interfaces/IBookmarksLinksRepository";

@injectable()
class EditBookMarkUseCase {

    constructor(
        @inject("BookmarksRepository")
        private bookmarksRepository : IBookmarksRepository,
        @inject("UsersRepository")
        private usersRepository : IUsersRepository
    ){}

    async execute(user_id : string, bookmark_id : string , title : string) : Promise<void>{

        const bookmark = await this.bookmarksRepository.findById(bookmark_id);
        const user = await this.usersRepository.findById(user_id);

        if(!user){
            throw new Error("User doesn't exists")
        }

        if(!bookmark || user.id != bookmark.user_id){
            throw new Error("Bookmark invalid")
        }

        await this.bookmarksRepository.edit(bookmark_id,title)
    }
}

export {EditBookMarkUseCase}