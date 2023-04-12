// const name="prakhar";
// console.log(name);
// const fs=require("fs")
// fs.writeFileSync('read.txt',"WELCOME");
// const fs=require("fs")
// fs.writeFileSync('read.txt',"PRAKHAR");
// IF FILE IS NOT PRESENT THEN IT MAKE NEW FILE IF IT IS PRESENT DATA IS OVERWRITE.
// fs.appendFileSync('read.txt',"Hello")


// const buf_data=fs.readFileSync('read.txt');
// // console.log(buf_data);
// // Node js is an additional data type called buffer.Mainly used to store binary data
// org_data=buf_data.toString();
// console.log(org_data);
// fs.renameSync('read.txt','readwrite.txt');to rename file

// to create folder-fs.mkdirSync()
// const data=fs.readFileSync('readwrite.txt',"utf8")
// console.log(data); to write in string format we use encoding

//fs.unlinkSync("readwrite.txt")//to delete file
//fs.rmdirSync("")// to delete folder

//Async
// fs.writeFile('read.txt',"heelloo",(err)=>{
//     console.log("file is created");
//     console.log(err);
// });
// we have to pass callback in async
//we pass them a function as an arguement -a callback -that gets called when that task complete 
//callback has an argument that tells whter operation completed succesfully.
// fs.appendFile('read.txt',"prakharrrrrrrrrrrrrrrrrrrrr" ,(err)=>{
// console.log(err);
// console.log("Hello")
// });
// fs.readFile("read.txt","utf8",(err,data)=>{
//     console.log(data);
// })


// const os=require("os")
// console.log(os.arch())
// const free=os.freemem();
// console.log(`${free/1024/1024/1024}`);

// const total=os.totalmem();
// console.log(`${total/1024/1024/1024}`);
// console.log(os.hostname())
// console.log(os.platform())
// console.log(os.tmpdir())
// console.log(os.type())


// const path=require('path');
// console.log(path.dirname('C:/Users/91730/Desktop/React-Class/node/index1.js'));
// console.log(path.extname('C:/Users/91730/Desktop/React-Class/node/index1.js'));
// console.log(path.basename('C:/Users/91730/Desktop/React-Class/node/index1.js'));
// console.log(path.parse('C:/Users/91730/Desktop/React-Class/node/index1.js')); 
// console.log(path.parse('C:/Users/91730/Desktop/React-Class/node/index1.js'));

