const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/MYMONGO")
const schema=new mg.Schema({username:{type:String,required:[true,"This Field is required"],minlength:4,maxlength:
    [20,"Must be less than 20"],trim:true,uppercase:true,match:[/^[A-Za-z]+[0-9]+$/,"Must start with letters and end with digits"]},
age:{type:Number,min:18,max:65},role:{type:String, enum:["admin","user"],default:"user"},
email:{type:String,unique:true,required:true,match:/.+@.+\..+/}})

const User=new mg.model("user",schema)
const createUser=async()=>{
    try{
        const udata=new User({username:"ABC123",age:42,role:"admin",email:"abcgmail.com"})
        const res=await udata.save()
        console.log(res)
    }
    catch(e)
    {
        console.log(e)
    }
}
createUser()