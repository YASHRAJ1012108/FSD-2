// npm config set proxy http://192.168.10.252:808
// npm i express 
// npm list express
const express=require("express");
const app=express();
/* The code snippet `app.get('/',(req,res)=>{ res.set("content-type","text/html");
res.write("<h1>Welcome to myy Page</h1>"); res.end(); res.send(); })` is creating a route in the
Express application for handling GET requests to the root URL ("/"). */
app.get('/',(req,res)=>{
    res.set("content-type","text/html");
    res.write("<h1>Welcome to myy Page</h1>");
    res.end();
    res.send();//Cannot set headers after they are sent to the client means after write you cant give data to send
    //res.write(text) end write in send or direct write in send
})
app.get("/about",(req,res)=>{
    // res.set("content-type","text/html"); not required if u used send 

    res.send("<h3>About page</h3><a href='/'>Homeeeeee</a>");
});app.listen(7001);
//app.all dont remember post or get