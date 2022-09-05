import { container } from "tsyringe";
import { IUsersRepository } from "../../modules/users/interfaces/IUsersRepository";
import { UsersRepository } from "../../modules/users/infra/typeorm/repositories/UsersRepository";
import { IBookmarksRepository } from "../../modules/bookmarks/interfaces/IBookmarksLinksRepository";
import { BookmarksLinksRepository } from "../../modules/bookmarks/infra/repository/BookmarksRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)


container.registerSingleton<IBookmarksRepository>(
    "BookmarksRepository",
    BookmarksLinksRepository
)