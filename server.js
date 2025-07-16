const expr=require("express")
const app=expr()
const cors=require("cors")
const mg=require("mongoose")
app.use(cors())
app.use(expr.json())
mg.connect("mongodb://127.0.0.1:27017/ReData")
const myschema=new mg.Schema({username:String, email:String})
const user=new mg.model("reactdata",myschema)
app.post("/user",async(req,res)=>
{
    try {
        const newuser=new user({username:req.body.uname,email:req.body.email})
        await newuser.save()
    }
    catch(e){
        console.log(e)
    }
    res.send()
})
app.listen(5008)