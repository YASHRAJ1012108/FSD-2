var url=require("url");
var http=require("http");
var server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{"content-type":"text/html"});
        res.end("<ul><li><a href='/Home'>Home</li><li><a href='/About'>About</li><li><a href='/Contact'>Contact</li></ul>");

    }
    else if(req.url=="/About"){
        res.writeHead(200,{"content-type":"text/html"});
        res.end("<h1 style='text-align:center;'>About Us Page</h1>")
    }
    else if(req.url=="/Contact"){
        const a={"contact":"9998053529","email":"ljietwork.com"};
        res.writeHead(200,{"content-type":"application/json"});
        res.end(JSON.stringify(a));
    }
    else{
        res.writeHead(404,{"content-type":"text/plain"});
        res.end("page not found");

    }
}).listen(7001)