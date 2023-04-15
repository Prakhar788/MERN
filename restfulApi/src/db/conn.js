const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api")//it return a promise
.then(()=>{
    console.log("Succesful");
}).catch((e)=>{
    console.log("Unsuccesful");
})