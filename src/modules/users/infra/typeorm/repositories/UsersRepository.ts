import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm/data-source";
import { User } from "../entity/User";
import { IUsersRepository } from "../interfaces/IUsersRepository";



class UsersRepository implements IUsersRepository{

    private repository : Repository<User>

    constructor(){
        this.repository = AppDataSource.getRepository(User)
    }

    create(name: string, password: string): Promise<User> {
        throw new Error("Method not implemented.");
    }

} 


export {UsersRepository}