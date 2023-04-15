const express=require('express');
require("./db/conn");
const Student=require("./models/students");
const app=express();
const port=process.env.PORT || 3000;
// app.get("/",(req,res)=>{
//     res.send("Hello Guys");
// })

app.use(express.json());

//Create new students

app.post("/students",(req,res)=>{
    console.log(req.body);
    const user=new Student(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    }) 
    //to store it into mongo databse.It also return a promise
   // res.send("Hello");
})

app.listen(port,()=>{
    console.log(`Connection Succesful`);
});

//You Do not need express.json() and express.urlencoded() for get or delete requests.we only need it for post and put req.
//express.json() is a method inbuild in express to recognise the incoming Request Object as a json object.This method is called as a middleware in your application using the code app:use(express.json());