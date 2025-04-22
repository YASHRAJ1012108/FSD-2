const express=require("express");
const app=express();
var s={a:[{"name":"Temp","age":30},
        {"name":"ABC","age":15},
        {"name":"XYZ","age":42}]
    };
    app.get('/',(req,res)=>{
        res.set("content-type","text/html");
        res.write("<table border='2'><tr><th>Name</th><th>Age</th></tr>");
        var sd=s.a.sort((c,b)=>b.age-c.age);
        console.log(sd);
        for(x of sd){
            res.write(`<tr><td>${x.name}</td><td>${x.age}</td></tr>`);
        }
        res.write("</table>");
        res.send();
    });
    app.listen(7007);
