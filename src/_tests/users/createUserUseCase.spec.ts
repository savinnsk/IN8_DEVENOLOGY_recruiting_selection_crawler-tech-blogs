import "reflect-metadata"

import { CreateUserUseCase } from "../../modules/users/usecases/createUser/CreateUserUseCase"
import { UsersRepositoryInMemory } from "./usersRepositoryInMemory/usersRepositoryInMemory"



let usersRepositoryInMemory = new UsersRepositoryInMemory
let createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory)


describe("create user" , () => {

    it("should be able to create a new user" , async() =>{

       const user = await createUserUseCase.execute(
                "Name car",
                "new password"
            )

            expect(user).toHaveProperty("id")
    })

})