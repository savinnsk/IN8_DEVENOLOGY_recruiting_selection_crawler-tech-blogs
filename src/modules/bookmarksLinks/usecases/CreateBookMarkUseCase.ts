import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../users/interfaces/IUsersRepository";
import { BookmarksLinks } from "../infra/entity/BookmarksLinks";
import { BookmarksLinksRepository } from "../infra/repository/BookmarksLinksRepository";
import { IBookmarksRepository } from "../interfaces/IBookmarksLinksRepository";

@injectable()
class CreateBookMarkUseCase {

    constructor(
        @inject("BookmarksRepository")
        private bookmarksLinksRepository :  IBookmarksRepository,
        private usersRepository : IUsersRepository
    ){}

    async execute(user_id: string , title : string ) : Promise<string>{

        const user = await this.usersRepository.findById(user_id);

        if(!user){
            throw new Error("User doesn't exists")
        }

        const bookmark = await this.bookmarksLinksRepository.create(user_id , title)

        return bookmark.title

    }
}


export {CreateBookMarkUseCase}