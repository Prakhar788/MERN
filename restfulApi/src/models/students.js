const mongoose=require("mongoose");
const validator=require('validator');


//Define Schema

const studentScheme=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email Id Already Present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone:{
        type:Number,
        minlength:10,
        maxlength:10,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    }
})


//Create A new Collection

const Student=new mongoose.model('Student',studentScheme);

module.exports=Student;