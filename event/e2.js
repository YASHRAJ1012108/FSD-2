const eventemitter=require("events");
const ee=new eventemitter();
ee.on("test",(a,b)=>{
    console.log("Multiplication is:"+a*b);
    ee.emit("end");
    ee.emit("end");

})
ee.on("end",()=>{console.log("hello");});

ee.on("end",()=>{console.log("event e]nded")});

ee.emit("test",5,7)