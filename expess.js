const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("Arshdeep Singh Sandhu");
})

app.listen(8888,()=>{
     console.log(" connected to port 8888");
});