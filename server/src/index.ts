import "dotenv/config";
import express from "express";


const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get("/post",async(req,res,next)=>{
 
})

 




app.listen(3000,()=>{
    console.log("server listning on port 3000 pajaro")
})