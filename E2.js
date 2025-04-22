//JSON processing
const express=require("express");
const app=express();
var a={"name":"ABC",
        "age":25
};
app.get('/',(req,res)=>{
        res.set("content-type","application/json");//prity print default-plain
        // res.write(a); "chunk" argument must be of type string or an instance of Buffer or Uint8Array
        // res.write(JSON.stringify(a));
        res.write(a.age+" ");//append with string behave as string

        res.send();
});
app.get("/second",(req,res)=>{
        // res.send(a);
        res.send(404);//status code according number take but mine not work
        // res.sendStatus(200);
        // res.status(200).send("Ok");//custom status

});
app.get("/third",(req,res)=>{
    // res.json(a);
    res.json(a.age);

});
app.listen(7007);

//json object to string write,json and send 200-ok,404-not found,send after send and send after write not possi,res.json after send not