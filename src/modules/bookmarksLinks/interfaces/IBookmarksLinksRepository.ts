import { Bookmark } from "../infra/entity/Bookmark"

interface IBookmarksRepository {
    create(user_id : string , title : string) : Promise<Bookmark>
    getAll(user_id : string) : Promise<[]>
    edit(bookmark_id : string , user_id : string) : Promise <Bookmark>
    delete(bookmark_id : string ) : Promise<void>
    findById(bookmark_id : string) :  Promise<Bookmark>
}

export {IBookmarksRepository}