import { User } from "../entity/User";
//import { UserDTO } from "./UserDTOr";

export interface IUsersRepository {
    create(name : string , password : string): Promise<User>
}