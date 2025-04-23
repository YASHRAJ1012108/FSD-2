const express=require("express");
const app=express();
app.use(express.static(__dirname));//default index html 
// app.use(express.static("fronted",{index"m2.html"}));

app.listen(8001);