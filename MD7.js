// findByIdAndUpdate
const mg=require("mongoose")
const validator=require("validator")
mg.connect("mongodb://127.0.0.1:27017/MYMONGO")
const schema=new mg.Schema({
    email:{type:String,unique:true,required:true,match:/.+@.+\..+/,validate:[validator.isEmail,"This is not a Valid Email ID"]},
    name:{type:String,required:true,validate:[validator.isAlphanumeric,"Not a valid alphanumeric code"]}
})
const model=new mg.model("emailModel",schema)
const updatebyId=async(id,update)=>{
    try{
        const res2=await model.findByIdAndUpdate(id,update,{new:true,upsert:true})
        console.log(res2)
    }
catch(e){
    console.log(e)
}
}
updatebyId("686de43581f4f4050d4411f8",{name:"XYZ123"})