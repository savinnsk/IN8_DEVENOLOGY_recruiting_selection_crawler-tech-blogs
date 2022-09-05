import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../../users/interfaces/IUsersRepository";
import { IBookmarksRepository } from "../../interfaces/IBookmarksLinksRepository";

@injectable()
class DeleteBookMarkUseCase{
    constructor(
        @inject("BookMarksRepository")
        private bookmarksRepository : IBookmarksRepository,
        @inject("UsersRepository")
        private usersRepository : IUsersRepository
        
    ){}


    async execute(user_id : string , bookmark_id : string) : Promise<void> {


    }
}

export{DeleteBookMarkUseCase}