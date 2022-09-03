import { container } from "tsyringe";
import { IUsersRepository } from "../../modules/users/interfaces/IUsersRepository";
import { UsersRepository } from "../../modules/users/infra/typeorm/repositories/UsersRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)