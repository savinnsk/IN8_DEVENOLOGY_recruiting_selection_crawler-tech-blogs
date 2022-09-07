


let carsRepositoryInMemory = new CarsRepositoryInMemory()
let createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory)


describe("create car" , () => {

    it("should be able to create a new car" , async() =>{

       const car = await createCarUseCase.execute(
            {
                name : "Name car",
                description : "Description car",
                daily_rate : 123,
                lincense_plate : "1234",
                fine_amount : 123,
                brand : "Brand car",
                category_id : "category_id"
            })

            expect(car).toHaveProperty("id")
    })

})