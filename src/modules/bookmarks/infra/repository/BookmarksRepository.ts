import { Repository } from "typeorm";
import { AppDataSource } from "../../../../shared/infra/typeorm/data-source";
import { IBookmarksRepository } from "../../interfaces/IBookmarksLinksRepository";
import { Bookmark } from "../entity/Bookmark";

class BookmarksLinksRepository implements IBookmarksRepository{

    private repository : Repository<Bookmark>

    constructor(){

        this.repository = AppDataSource.getRepository(Bookmark)
    }

    async create(user_id: string, link: string , label : string): Promise<Bookmark> {
       const bookmark = this.repository.create({
        link,
        label,
        user_id : user_id
       })
            
      this.repository.save(bookmark)

       return bookmark
    }
     
    async findById(bookmark_id : string): Promise<Bookmark>{

        const bookmark = await this.repository.findOne({
            where: {id : bookmark_id}
        })

        return bookmark
    }

    async getAll(user_id: string): Promise<Bookmark[]> {
        const bookmarks = await this.repository.find({
            where:{
                user_id : user_id
            }
    })
  
      return bookmarks;
    }
    
    async edit(id: string ,link : string , label : string): Promise<void> {
        await this.repository
        .createQueryBuilder()
        .update(Bookmark)
        .set({
          link: `${link}`,
          label: `${label}`
        })
        .where("id = :id", {
          id,
        })
        .execute();
    }
    
    async delete(id: string) : Promise<void>{
       await this.repository
      .createQueryBuilder()
      .delete()
      .from(Bookmark)
      .where("id= :id", { id })
      .execute();
    }
    
}

export {BookmarksLinksRepository}