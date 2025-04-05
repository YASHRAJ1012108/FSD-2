    const eventemitter=require("events");
    const ee=new eventemitter();
    const fun1=(msg)=>{
        console.log("function1="+msg);
    }
    const fun2=(msg)=>{
        console.log("function2="+msg);
    }
    ee.on("e1",fun1);
    ee.on("e2",fun2); 
    // remove above listener
    ee.on("e1",fun1);
    ee.on("e2",fun2);
    ee.removeListener("e2",fun2);
    ee.removeAllListeners("e1");
    // all e1 listeners removed
    ee.emit("e1","LjStudywithBuddy");
    ee.emit("e2","NirmaHacknuthonn");
    // #npx nodemon e3.js
