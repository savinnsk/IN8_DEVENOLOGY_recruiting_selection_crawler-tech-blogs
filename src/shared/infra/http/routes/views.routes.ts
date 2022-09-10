import { Request, Response, Router } from "express";

const viewRoutes = Router()

viewRoutes.get("/" , (request : Request ,  response : Response ) =>{

    response.render("index")
})

export {viewRoutes}