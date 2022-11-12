import { IUsersRepository } from "../../interfaces/IUsersRepository"
import { CreateUserUseCase } from "./CreateUserUseCase"

interface SutTypes {
    sut: CreateUserUseCase
    emailValidatorStub: IUsersRepository
  }


const makeSut = ()=>{
    const usersRepository = new IUsersRepository()
    const sut = new CreateUserUseCase()
}
describe('Add a new User' ,()=>{
    const sut = new CreateUserUseCase()

    test('Should be able to create a new user',()=>{
        
    })
})