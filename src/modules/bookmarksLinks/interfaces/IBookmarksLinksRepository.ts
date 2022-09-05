import { BookmarksLinks } from "../infra/entity/BookmarksLinks"

interface IBookmarksRepository {
    create(user_id : string , title : string) : Promise<BookmarksLinks>
    getAll(user_id : string) : Promise<[]>
    edit(bookmarks_id : string , user_id : string) : Promise <BookmarksLinks>
    delete(bookmarks_id : string ) : Promise<void>
}

export {IBookmarksRepository}