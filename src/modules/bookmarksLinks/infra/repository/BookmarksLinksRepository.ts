import { Repository } from "typeorm";
import { AppDataSource } from "../../../../shared/infra/typeorm/data-source";
import { IBookmarksRepository } from "../../interfaces/IBookmarksLinksRepository";
import { BookmarksLinks } from "../entity/BookmarksLinks";

class BookmarksLinksRepository implements IBookmarksRepository{

    private repository : Repository<BookmarksLinks>

    constructor(){

        this.repository = AppDataSource.getRepository(BookmarksLinks)
    }

    async create(user_id: string, title: string): Promise<BookmarksLinks> {
       const bookmark = this.repository.create({
        title,
        user_id : user_id
       })
            
      this.repository.save(bookmark)

       return bookmark
    }
     
    async getAll(user_id: string): Promise<[]> {
        throw new Error("Method not implemented.");
    }
    
    async edit(bookmarks_id: string, user_id: string): Promise<BookmarksLinks> {
        throw new Error("Method not implemented.");
    }
    
    async delete(bookmarks_id: string) : Promise<void>{
       await this.repository
      .createQueryBuilder()
      .delete()
      .from(BookmarksLinks)
      .where("id= :id", { bookmarks_id })
      .execute();
    }
    
}

export {BookmarksLinksRepository}