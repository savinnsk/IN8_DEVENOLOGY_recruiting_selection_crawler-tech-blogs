import { inject, injectable } from "tsyringe";
import { crawlerWebBlog} from "../../../../shared/services/puppeteer";
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

    async execute(user_id: string  , label : string , link : string ) : Promise<Bookmark[]>{

       const user = await this.usersRepository.findById(user_id);

       if(link == "https://devgo.com.br/" || link == "https://devgo.com.br"){
        
            const blogsFromDevGo = await crawlerWebBlog(link);

            for(let i = 1 ;  i < blogsFromDevGo.length ; i++){
                
                await this.bookmarksLinksRepository.create(
                    user_id , 
                    blogsFromDevGo[i].title, 
                    blogsFromDevGo[i].link)

            }            
       }else{

        await this.bookmarksLinksRepository.create(user_id , label  , link)
        }
    
    
    if(!user){
        throw new Error("User doesn't exists")
        
    }
    
    
    const bookmarks = await this.bookmarksLinksRepository.getAll(user_id) 

    return bookmarks

    }
}


export {CreateBookMarkUseCase}