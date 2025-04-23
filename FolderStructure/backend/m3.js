const express=require("express");
const path=require("path");
const app=express();
var ds=path.join(__dirname,"../");//__dirname=backend and ../folder structure
// app.use(express.static(__dirname));//default index html 
app.use(express.static(ds));

app.listen(8002);