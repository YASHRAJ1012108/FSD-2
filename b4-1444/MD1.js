const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/MYMONGO")
.then(()=>{console.log("Connection Successful")})
.catch((e)=>{console.log("Error: "+e)})
const schema=new mg.Schema({name:String,city:String,email:String,age:Number,date:{type:Date,default:new Date().toLocaleDateString()}},{versionKey:false,strict:false/* Schema me column nhi ho but data me add kare to table me add ho to strict ko false rakhna hoga */})
mg.pluralize("null")/* To avoid plural name of Database for eg: Person to people, cow to cows etc. */
const Person=new mg.model("person",schema)
const insertdoc=async()=>{
    try{
        const pdata=new Person({name:"ABC",city:"Ahmedabad",email:"abc@gmail.com",age:20})
        const res=await pdata.save()
        console.log(res)
    }
    catch(e)
    {
        console.log(e)
    }
}
insertdoc()