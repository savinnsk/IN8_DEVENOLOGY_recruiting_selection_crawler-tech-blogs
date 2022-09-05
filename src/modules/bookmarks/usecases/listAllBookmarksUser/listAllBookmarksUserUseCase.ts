import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../../users/interfaces/IUsersRepository";
import { Bookmark } from "../../infra/entity/Bookmark";
import { IBookmarksRepository } from "../../interfaces/IBookmarksLinksRepository";

@injectable()
class ListAllBookmarksUserUseCase {

    constructor(
        @inject("BookmarkRepository")
        private bookmarksRepository : IBookmarksRepository,
        @inject("UsersRepository")
        private usersRepository : IUsersRepository
    ){}


    async execute(user_id : string) : Promise<Bookmark[]>{

        const user = await this.usersRepository.findById(user_id);

        if(!user){
            throw new Error("User doesn't exists")
        }

        const bookmarks = await this.bookmarksRepository.getAll(user_id)

        return bookmarks
    }
}

export {ListAllBookmarksUserUseCase}