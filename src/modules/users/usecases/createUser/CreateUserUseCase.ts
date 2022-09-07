import { inject, injectable } from "tsyringe";
import { User } from "../../infra/typeorm/entity/User";
import { IUsersRepository } from "../../interfaces/IUsersRepository";
import {hash} from "bcrypt"

@injectable()
class CreateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository : IUsersRepository
    ){}


    async execute(name : string , password : string) : Promise<User>
    {
        try{

        //const userAlreadyExists = await this.usersRepository.findByName(name)
        
        const passwordHash = await hash(password , 8)
        
        const user = await this.usersRepository.create(name , passwordHash);

        return user
        
        }catch(err){
            console.log(err)
        }
    }
}

export {CreateUserUseCase}