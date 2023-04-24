const http = require('http');
http.createServer((req,res)=>{
   let url =  req.url;
   res.writeHead(200,{'Content-Type':'text/html'});
   res.write(`The requested url is: ${url}`);
   res.end();
}).listen(8081, ()=>{console.log("app is listenning on 8081")});