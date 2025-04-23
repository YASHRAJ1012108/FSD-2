const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/g1.html");//app.use(express.static)|| same as 

});
app.get("/process",(req,res)=>{
    res.send(`<h1>Welcome ${req.query.fn} ${req.query.ln} </h1>`);
});
app.listen(5001);