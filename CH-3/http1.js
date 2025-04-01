var http=require("http");
var server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"});
    // plain and html
    res.write("<h1>Welcome</h1>");
    res.write("<h3 style='color:red';>Students<h3>");
    res.end("2025");
    // you only give string not object it give error
    // res.write("hii")  
    // after end you can't print anyting write after end  error
})
server.listen(5002,()=>{console.log("server Started")});
// go browser and type localhost:5002