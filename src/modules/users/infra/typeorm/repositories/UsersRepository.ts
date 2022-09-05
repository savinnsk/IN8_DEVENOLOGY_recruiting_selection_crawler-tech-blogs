import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm/data-source";
import { User } from "../entity/User";
import { IUsersRepository } from "../../../interfaces/IUsersRepository";



class UsersRepository implements IUsersRepository{

    private repository : Repository<User>

    constructor(){
        this.repository = AppDataSource.getRepository(User)
    }

    async findById(id : string): Promise<User>{

        const user = await this.repository.findOne({
            where: {id}
        })

        return user
    }

    async findByName(name: string): Promise<User> {
       
        const user = await this.repository.findOne({
            where:{name}
        })

        return user
    }

    async create(name: string, password: string): Promise<User> {

        const user = await this.repository.create({
            name,
            password
        })

        await this.repository.save(user)

        return user
    }

 
} 

export {UsersRepository}
