var expr=require("express")
var app=expr()
var mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/ReData")

const myschema=new mg.Schema({username:{type:String, required:true},
    email:{type:String,unique:true,required:true,match:/.+@.+\..+/}})

const user=new mg.model("userdata", myschema)
app.use(expr.static(__dirname,{index:"task.html"}))
app.get("/data",async(req,res)=>
{
    const udata=new user({
        username:req.query.uname,
        email:req.query.eid,
    })
    await udata.save()
    res.send("Thank You!")
})
app.listen(5009)