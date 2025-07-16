/*
pname   : must remove leading and trailing spaces.
        : min length 5
        : max length 15
        : must be stored in lowercase
        : contains only alphanumeric 

price   : must be greater than 0 and less than 1000

model name: productdata

*/
const mg=require("mongoose")
const validator=require("validator")
mg.connect("mongodb://127.0.0.1:27017/MYMONGO")
const schema=new mg.Schema({pname:{type:String,required:[true,"This Field is required"],minlength:5,maxlength:
    [15,"Must be less than 15"],trim:true,lowercase:true,validate:[validator.isAlphanumeric,"Not a valid alphanumeric code"]},
price:{type:Number,min:1,max:999},category:{type:String, enum:["electronics","home decore","Kitchen"]},
quantity:{type:Number,min:0,default:5}})

const model=new mg.model("productdata",schema)
const createUser=async()=>{
    try{
        const data=new model({pname:"Cleaner",price:99,category:"home decore",quantity:1})
        const res=await data.save()
        console.log(res)
    }
    catch(e)
    {
        console.log(e)
    }
}
createUser()