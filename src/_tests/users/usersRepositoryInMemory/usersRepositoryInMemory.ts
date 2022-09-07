import { User } from "../../../modules/users/infra/typeorm/entity/User";
import { IUsersRepository } from "../../../modules/users/interfaces/IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository{

    users : User[] = [];

    async create(name: string, password: string): Promise<User> {
        const user = new User();

        Object.assign(user, name , password);
    
        this.users.push(user);
    
        return user;
    }
    findByName(name: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    
}

export {UsersRepositoryInMemory}