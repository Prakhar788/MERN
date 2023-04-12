const express=require("express");
const path=require("path")
const app=express();
const port=3000


// console.log(__dirname);
// console.log(path.join(__dirname,"../public"));
const staticPath=path.join(__dirname,"../public")

const templatepath=path.join(__dirname,"../templates")
//buildin middleware


//to set the view engine
app.set("view engine","hbs");
app.set("views",templatepath);//to use changed name file as views directory

//template engine route
app.get("/",(req,res)=>{
    res.render("index",{
        name:req.query.name
    })
});
//app.use(express.static(staticPath));

//first above is rendered because of top to bottom rule
app.get("/",(req,res)=>{
    res.send("<h1>Welcome Home</h1>")
});
app.get("/about",(req,res)=>{
    // console.log(req.query);
    res.status(200).send("Welcome About")
});
app.get("/contact",(req,res)=>{
    res.status(200).send("Welcome contact")
});
// app.get("/temp",(req,res)=>{
//     res.status(200).send({//automatically stringfy
//         name:"prakhar",
//         id:3
//     })
// });
app.get("/temp",(req,res)=>{
    res.status(200).json({//automatically stringfy
        name:"prakhar",
        id:3
    })
});
app.get("*",(req,res)=>{
    res.render("404")
})

app.listen(port,()=>{
console.log("listening")
});