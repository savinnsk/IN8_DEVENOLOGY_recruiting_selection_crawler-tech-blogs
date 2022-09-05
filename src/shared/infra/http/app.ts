import "reflect-metadata"
import * as express from "express"
import {router} from "./routes"

//import * as nunjucks from "nunjucks"


const app = express();
app.use(express.json());
app.use(router)


//app.use(methodOverride("_method"))

app.use(express.urlencoded({    
  extended: true}));  

  app.use( express.json())
  
/*app.use(express.static("src/public"));
//app.set("view engine" ,"njk" ,);
nunjucks.configure("src/views",{
 express:app,
 autoescape:false,
  noCache:true
})*/

export {app}