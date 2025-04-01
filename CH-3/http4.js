var url=require("url");
var http=require("http");
var fs=require("fs");
var add="http://localhost:5007/One.html";
http.createServer((req,res)=>{
    var data=url.parse(add).pathname // \One.html;
    var a=fs.readFileSync("."+data,"utf-8");
    res.writeHead(200,{"context-type":"text/html"});
    res.end(a);
}).listen(5001);