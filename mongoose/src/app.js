const mongoose=require('mongoose');
// mongoose.connect("mongodb://localhost:27017/my");


//connection creation and creating a new database
mongoose.connect('mongodb://127.0.0.1:27017/mydemo').then(()=>
    console.log("Success")).catch((err)=>console.log(err));

//schema
//A mongoose schema defines the structue of the document,default values,validators etc.
const playlistSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ctype:String,
    videos:Number,
    author:String,
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
    const result=await Playlist.find({ctype:"Frontend"}).select({name:1}).limit(1);//to show only name feild and limit to limit no. of document
    console.log(result);
}
getDocument();