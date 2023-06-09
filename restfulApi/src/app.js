const express=require('express');
require("./db/conn");
const Student=require("./models/students");
const studentRouter=require("./routers/student");//to make app.js clean
const app=express();
const port=process.env.PORT || 3000;




//we need to register our router
app.use(studentRouter)//to move operations to different files.

app.use(express.json());

//Create new students

// app.post("/students",(req,res)=>{
//     console.log(req.body);
//     const user=new Student(req.body);
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     }) 
//     //to store it into mongo databse.It also return a promise
//    // res.send("Hello");
// })

//Using async Await
app.post("/students",async(req,res)=>{
try{
    const user=new Student(req.body);
    const createuser=await user.save();
    res.status(201).send(createuser);

}catch(e){
    res.status(400).send(e);
}
});



//You Do not need express.json() and express.urlencoded() for get or delete requests.we only need it for post and put req.
//express.json() is a method inbuild in express to recognise the incoming Request Object as a json object.This method is called as a middleware in your application using the code app:use(express.json());

//read the data of registered students
app.get("/students",async(req,res)=>{
try{
   const studentsData=await Student.find();
   res.send(studentsData);
}catch(e){
    res.send(e);
}
});

//get the indiviual student data using id
app.get("/students/:id",async(req,res)=>{
    try{
       const _id=req.params.id;
       const studentData=await Student.findById({_id});

       if(!studentData){
        return res.status(404).send();
       }
       else{
        res.send(studentData);
       }
      
     }catch(e){
         res.status(500).send(e);
     }
});

//update the students by its id

app.patch("/students/:id",async(req,res)=>{
try{
    const _id=req.params.id;
    const updateStudents=await Student.findByIdAndUpdate({_id},req.body,{
        new:true//for getting new updated data
    });
    res.send(updateStudents);
}
catch(e){
res.status(400).send(e);
}
});

//delete the students record


app.delete("/students/:id",async(req,res)=>{
try{
const _id=req.params.id;
const deleteStudent=await Student.findByIdAndDelete({_id});
if(!req.params.id){
    return res.status(400).send();
}
res.send(deleteStudent)
}catch(e){
res.status(500).send(e)
}
})

app.listen(port,()=>{
    console.log(`Connection Succesful`);
});