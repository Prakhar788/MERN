//https://mongoosejs.com/docs/guide.html
const mongoose=require('mongoose');
const validator=require("validator");
// mongoose.connect("mongodb://localhost:27017/my");


//connection creation and creating a new database
mongoose.connect('mongodb://127.0.0.1:27017/mydemo').then(()=>
    console.log("Success")).catch((err)=>console.log(err));

//schema
//A mongoose schema defines the structue of the document,default values,validators etc.
const playlistSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true//it is not a type of validator
        //lowercase:true
        //trim:true to remove extra spaces in starting or at ending.
        //minlength:2,
        //maxlength:4
    },
    ctype:String
    //enum:["frontend","backend"] user have to fill any course which is from these two.
    ,
    videos:Number,
    // //videos{
    //     type:Number,
    //     validate(value)
    //     {
    //         if(value<0)
    //         {
    //     throw new Error("Videos Count Cannot be negative")
    // }}}
    //Second way
    // validate:{
    //     validator:function(value){
    //         return value.length<0
    //     },
    //     message:"Videos Count Cannot be negative"
    // }
    author:String,
    // email:{
    //     type: String,
    //     required:true,
    //     validate(value){
    //         if(!validator.isEmail(value)){
    //             throw new Error("Email Is Valid")
    //         }
    //     }

    // },
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})
//Mongoose Model
//APne collection create krna 


const Playlist=new mongoose.model("Playlist",playlistSchema);


//create document or insert

// const reactPlaylist=new Playlist({
//     name:"ReactJs",
//     ctype:"Frontend",
//     videos:"100",
//     author:"Prakhar",
//     active:true   
// })
// reactPlaylist.save();//it return a promise.it is async 

const createDocument=async()=>{
try{
    const nodePlaylist=new Playlist({
        name:"NodeJs",
        ctype:"Frontend",
        videos:"100",
       author:"Prakhar",
       active:true   
    })
    const jsPlaylist=new Playlist({
        name:"Js",
        ctype:"Frontend",
        videos:"100",
       author:"Prakhar",
       active:true   
    })
    // const result =await  reactPlaylist.save();
    const result =await  Playlist.insertMany([nodePlaylist,jsPlaylist]);
    console.log(result);
}catch(err){
    console.log(err);
}
    

}

//createDocument();
const getDocument=async()=>{
   try{
    const result=await Playlist
    // .find({ctype:"Frontend"})
    //.find({videos:{$gt:50}})
    //Comparision operator// .find({ctype:{$in:["Frontend","Backend"]}})//to check if any of them comes iin database and if we want to exclude both we can use notin operator $nin.
    // .find({ctype:{$nin:["Database","Backend"]}})

    //LogicalOperator
    //.find({$or:[{ctype:"Frontend"},{author:"Prakhar"}]})
    .find({$and:[{ctype:"Frontend"},{author:"Prakhar"}]})
    .select({name:1})
    // .sort({name: 1});
   // .countDocuments();
    //.count() it is deprecated
    //.limit(1);//to show only name feild and limit to limit no. of document
    console.log(result);
   } 
   catch(err){
    console.log(err);
   }
}
// getDocument();
const updateDocument=async(_id)=>{
   try{const result= await Playlist
//     .updateOne({_id},{$set:{
//     name:"Javascript"
//    }});
.findByIdAndUpdate({_id},{$set:{
    name:"Javascript Playlist"
   }},{new:true});//to show value afterupdating
   console.log(result);
}
catch(err){
    console.log(err);
}
   
}
//updateDocument("64392adcd16a0834b4ffc462");



const deleteDocument=async(_id)=>{
   try{

    const result=await Playlist.deleteOne({_id})//if keyvalue is same then we can write only one for example in this if we take arguement as id then we will write _id:id.
   }
   catch(err){
    console.log(err);
   }
}

deleteDocument("64392a91246a3953bec8c254")