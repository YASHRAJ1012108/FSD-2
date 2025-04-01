var url=require("url");
var http=require("http");
    http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    var data=url.parse(req.url,true).query;
    var mul=data.a*data.b
    res.end("multiplication of a & b is"+mul);
}).listen(5002);

// #mul+" " behave as string here mul is first int after it become string
// http://localhost:5002/about/test?a=10&b=20