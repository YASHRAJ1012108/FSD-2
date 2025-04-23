var express=require("express");
var app=express();
app.get("/sem/:no/branch/:branch",(req,res)=>{
    res.send(req.params.branch);
})
app.listen(7001);
//we dont use post here to accessa url