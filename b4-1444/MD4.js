const mg=require("mongoose")
const validator=require("validator")
mg.connect("mongodb://127.0.0.1:27017/MYMONGO")
const schema=new mg.Schema({
    email:{type:String,unique:true,required:true,match:/.+@.+\..+/,validate:[validator.isEmail,"This is not a Valid Email ID"]},
    name:{type:String,required:true,validate:[validator.isAlphanumeric,"Not a valid alphanumeric code"]}
})
const model=new mg.model("emailModel",schema)
const createUser=async()=>{
    try{
        const data=new model({email:"xyz@gmail.com",name:"Sarvesh"})
        const res=await data.save()
        console.log(res)
    }
    catch(e)
    {
        console.log(e)
    }
}
createUser()