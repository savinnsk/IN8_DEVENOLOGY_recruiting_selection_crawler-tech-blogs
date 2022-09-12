import { User } from "../infra/typeorm/entity/User";
//import { UserDTO } from "./UserDTOr";

export interface IUsersRepository {
    create(name : string , password : string , email: string): Promise<User>
    findByName(name : string) : Promise<User>
    findById(id : string) : Promise <User>
    findByEmail(email : string) : Promise<User>
}