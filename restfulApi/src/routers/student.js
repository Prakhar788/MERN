const express=require("express");

//Create a new router
const router=new express.Router();
//we need to define the router
router.get("/",(req,res)=>{
    res.send("Hello Guys");
})



//Now we can paste all the crud operations of restful api by replacing app.get to router.get.

module.exports=router;