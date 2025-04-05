    const eventemitter=require("events");
    const ee=new eventemitter();
    const fun2=(r,s)=>{
        if(r<0){
            console.log("Your radious of circle is negative");
        }
        else{
            console.log("Your perimeter of circle is ="+(2*3.14*r));
        }
        if(s<0){
            console.log("Your radious of square is negative");
        }
        else{
            console.log("Your perimeter of square is ="+(4*s));
        }
    }
    ee.on("peri",fun2);
    ee.emit("peri",3,2);
