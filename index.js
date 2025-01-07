import express from "express"
const app = express();

app.get("/",(req,res)=>
{
res.json({message:"Hello!!! Server is up and running"});
})

app.listen(8000,()=>{
console.log("server is running on 8000")})
