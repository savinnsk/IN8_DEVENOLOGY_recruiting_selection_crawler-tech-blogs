import { Request, Response, Router } from "express";

const viewRoutes = Router()


viewRoutes.get("/" , (request : Request ,  response : Response ) =>{
    response.render("index")
})

viewRoutes.get("/users/create" , (request : Request ,  response : Response ) =>{
    response.render("users/create")
})

viewRoutes.get("/users/login" , (request : Request ,  response : Response ) =>{
    response.render("users/login")
})

viewRoutes.get("/bookmarks/create" , (request : Request ,  response : Response ) =>{
    response.render("bookmarks/create")
})


viewRoutes.get("/bookmarks" , (request , response) => {

response.render("bookmarks/bookmarks")

})


export {viewRoutes}