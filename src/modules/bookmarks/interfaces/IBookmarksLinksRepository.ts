import { Bookmark } from "../infra/entity/Bookmark"

interface IBookmarksRepository {
    create(user_id : string , link : string , label : string) : Promise<Bookmark>
    getAll(user_id : string) : Promise<Bookmark[]>
    edit(bookmark_id : string ,  link : string , label : string) : Promise <void>
    delete(bookmark_id : string ) : Promise<void>
    findById(bookmark_id : string) :  Promise<Bookmark>
}

export {IBookmarksRepository}