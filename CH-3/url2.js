var fs=require("fs");
var url=require("url");
var addr="http://localhost:5001/test/abc/?month=april&year=2025#about;"
var data=url.parse(addr,true).query;
// fs.writeFile("h1.txt",JSON.stringify(data) ,(err)=>{if(err){console.log(err);}else{console.log("written");}})
    // The "data" argument must be of type string or an instance of Buffer,

fs.writeFile("h1.txt",JSON.stringify(data) ,(err)=>{
    if(err){console.log(err);}
    else{fs.appendFile("h1.txt",data.year+" "+data.month,(e)=>{
    if(e){console.log(e)}
    else{console.log("appended")}})}})
    