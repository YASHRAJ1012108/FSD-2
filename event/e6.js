    var e=require("events");
    var fs=require("fs");
    var ee=new e();
    ee.on("data-write",function()
    {
    fs.writeFile("b.txt","Hello, ",(err)=> {console.log()});
    console.log("Data Written");
    ee.emit("data-append");
    ee.emit("data-read");
    });
    ee.on("data-append",function()
    {
    fs.appendFile("b.txt","Good Morning!",(err)=> {console.log()});
    console.log("Data Appended");
    });
    ee.on("data-read",function()
    {
    fs.readFile("b.txt","utf-8",(err,data)=>
    {
    if(err){
    console.error(err);
    }
    console.log(data);
    });
    });
    ee.emit("data-write");