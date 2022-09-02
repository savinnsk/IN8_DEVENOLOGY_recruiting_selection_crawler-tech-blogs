import {app} from "./app"


import { AppDataSource } from "../typeorm/data-source"

AppDataSource.initialize().then(async () => {

app.listen(5000 , ()=> console.log("server is running"))

}).catch(error => console.log(error))


