const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/MYMONGO")
.then(()=>{console.log("Connection Successful")})
.catch((e)=>{console.log("Error: "+e)})
const schema=new mg.Schema({name:String,city:String,email:String,age:Number,date:{type:Date,default:new Date().toLocaleDateString()}},{versionKey:false,strict:false/* Schema me column nhi ho but data me add kare to table me add ho to strict ko false rakhna hoga */})
mg.pluralize("null")/* To avoid plural name of Database for eg: Person to people, cow to cows etc. */
const Person=new mg.model("person",schema)
/*const insertmultidoc=async()=>{
    try{
        const pdata=new Person({name:"ABC",city:"Surat",age:21})
        const pdata1=new Person({name:"XYZ",city:"Rajkot",email:"xyz@gmail.com",age:25})
        const res=await Person.insertMany([pdata,pdata1])
        console.log(res)
    }
    catch(e)
    {
        console.log(e)
    }
}
insertmultidoc()*/
const insertmultidoc2=async()=>{
    try{
        const data=[{name:"XYZ",city:"Rajpur",email:"xero@gmail.com",age:24},
            {name:"PQR",city:"Patan",email:"zintro@gmail.com",age:25},
            {name:"AAC",city:"Baroda",age:28}]
        const res=await Person.insertMany(data)
        console.log(res)
    }
    catch(e)
    {
        console.log(e)
    }
}
insertmultidoc2()