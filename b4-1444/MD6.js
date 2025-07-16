//Update

const mg=require("mongoose")
const validator=require("validator")
mg.connect("mongodb://127.0.0.1:27017/MYMONGO")
const schema=new mg.Schema({
    email:{type:String,unique:true,required:true,match:/.+@.+\..+/,validate:[validator.isEmail,"This is not a Valid Email ID"]},
    name:{type:String,required:true,validate:[validator.isAlphanumeric,"Not a valid alphanumeric code"]}
})
const model=new mg.model("emailModel",schema)
const updatename=async(name,update)=>{
    try{
        const res=await model.updateOne({name},update,{upsert:true})
        console.log("Updated "+res)
    }
    catch(e){
        console.log(e)
    }
}
updatename("Sarvesh",{name:"XYZ",email:"xyz@gmail.com"})