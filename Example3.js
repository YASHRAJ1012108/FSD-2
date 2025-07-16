const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/MYMONGO")
const schema=new mg.Schema({_id:Number,brand:String,price:Number,cat:String})
const Product=new mg.model("product",schema)

const insertmultidoc=async()=>{
    try{
        const data=[
{_id:1,brand:"samsung",price:29000,cat:"mobile"},
{_id:2,brand:"nokia",price:5000,cat:"mobile"},
{_id:3,brand:"vivo",price:16000,cat:"mobile"},
{_id:4,brand:"samsung",price:60000,cat:"tv"},
{_id:5,brand:"samsung",price:40000,cat:"washing machine"},
{_id:6,brand:"ifb",price:45000,cat:"wasing machine"},
{_id:7,brand:"apple",price:120000,cat:"mobile"},
{_id:8,brand:"oppo",price:20000,cat:"mobile"},
{_id:9,brand:"sony",price:80000,cat:"tv"},
{_id:10,brand:"vivo",price:31000,cat:"mobile"},
]
        const res=[]
        res.push(await Product.insertMany(data))

        //1)	Display price and brand of product which are of mobile cat.
        res.push(await Product.find({cat:"mobile"},{cat:0,_id:0}))

        //2)    Increase price of each Samsung products by 1000.
        res.push(await Product.updateMany({brand:"samsung"},{$inc:{price:1000}}))

        //3)	Update all vivo product by adding field quantity and add random value
        res.push(await Product.updateMany({brand:"vivo"},{$set:{quantity:5}}))

        //4)	Display price of products which are of vivo or oppo brand.
        res.push(await Product.find({brand:{$in:["vivo","oppo"]}},{price:1,_id:0}))

        //5)	Display brand and cat of products which are less than 80000 and greater than or equal to 30000.
        
    }
    catch(e)
    {
        console.log(e)
    }
}
insertmultidoc()

