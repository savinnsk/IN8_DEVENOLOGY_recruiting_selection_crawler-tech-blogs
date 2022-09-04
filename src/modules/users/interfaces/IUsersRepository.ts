import { User } from "../infra/typeorm/entity/User";
//import { UserDTO } from "./UserDTOr";

export interface IUsersRepository {
    create(name : string , password : string): Promise<User>
    findByName(name : string) : Promise<User>
    findById(id : string) : Promise <User>
}