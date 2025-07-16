// findByIdAndDelete
const mg=require("mongoose")
const validator=require("validator")
mg.connect("mongodb://127.0.0.1:27017/MYMONGO")
const schema=new mg.Schema({
    email:{type:String,unique:true,required:true,match:/.+@.+\..+/,validate:[validator.isEmail,"This is not a Valid Email ID"]},
    name:{type:String,required:true,validate:[validator.isAlphanumeric,"Not a valid alphanumeric code"]}
})
const model=new mg.model("emailModel",schema)
const deletebyId=async(id)=>{
    try{
        const res2=await model.findByIdAndDelete(id)
        if (res2)
        {
            console.log("Deleted")
        }
        else{
            console.log("No such Document Found")
        }
    }
catch(e){
    console.log(e)
}
}
deletebyId("686de43581f4f4050d4411f8")