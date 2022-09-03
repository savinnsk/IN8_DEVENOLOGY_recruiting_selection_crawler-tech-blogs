import { inject, injectable } from "tsyringe";
import { User } from "../infra/typeorm/entity/User";
import { IUsersRepository } from "../interfaces/IUsersRepository";

@injectable()
class CreateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository : IUsersRepository
    ){}


    async execute(name : string , password : string) : Promise<string>{

        const user = await this.usersRepository.create(name , password);

        return user.name
    }
}

export {CreateUserUseCase}