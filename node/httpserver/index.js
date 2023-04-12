const http= require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    const data=fs.readFileSync(`${__dirname}/Userapi/userapi.json`,"utf-8");
    const objData=JSON.parse(data);
//   console.log(req.url);
if(req.url=="/"){
    res.end('Hello Guys');
}
else if(req.url=="/about"){
    res.end("Hello About Page")
}
else if(req.url=="/userapi"){
    res.writeHead(200,{"Content-type":"application/json "});
    res.end(objData[2].name);
}
else{
    res.writeHead(404,{"Content-type":"text/html"});
    res.end("<h1>Error</h1>");
}

 
});

server.listen(3000,"127.0.0.1",()=>{
    console.log('Listening');
});

// const url=require('url')

// JSON stands for javascript object Notation.json is a lightweight format for storing and transporting Data .json is often used when data is sent from  a server to a webpage