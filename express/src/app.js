const express=require("express");
const app=express();

// app.get(route,callback)

app.get("/",(req,res)=>{
 res.send("hello");
});

app.listen(8000,()=>{
     console.log("Listening")
})
// get-read
// post-create

// put-update
// delete