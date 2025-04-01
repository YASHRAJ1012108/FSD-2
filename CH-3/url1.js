//URL module
var url=require("url");
var addr="http://localhost:5001/test/abc/?month=april&year=2025#about;"
var data=url.parse(addr,true);
console.log(data);
console.log(data.query.year);
y=data.query.year;
    if(y%4==0){
        console.log("leap year")
    }
    else{
        console.log("Not a leap year")
    }
// Url {
//     protocol: 'http:',
//     slashes: true,//
//     auth: null,
//     host: 'localhost:5001',
//     port: '5001',
//     hostname: 'localhost',
//     hash: '#about;',fragment
//     search: '?month=april&year=2025',? start
//     query: 'month=april&year=2025',string value,true object near addr
//     pathname: '/test/abc/',
//     path: '/test/abc/?month=april&year=2025',
//     href: 'http://localhost:5001/test/abc/?month=april&year=2025#about;'
//   }