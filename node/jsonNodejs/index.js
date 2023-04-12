const { readFile } = require("fs");
const { json } = require("stream/consumers");

const bioData={
    name:"Prakhar",
    age:26,
};
// console.log(bioData.name);


//  To convert object into data
// const jsonData=JSON.stringify(bioData);
// console.log(jsonData);

//To convert data into object

// const objData=JSON.parse(jsonData);
// console.log(objData);

// 1.convert to json
// 2 dusre file me add krna history
// 3 readFile
// 4 again convert back to js obj ori 
// 5 console.log
// const fs=require("fs")
// const jsonData=JSON.stringify(bioData);
// fs.writeFile("json1.json",jsonData,(err)=>{
//     console.log(err);
// })

// fs.readFile("json1.json","utf-8",(err,data)=> {
//     //console.log(data);
//     const orgData=JSON.parse(data);
//     console.log(orgData);
// })