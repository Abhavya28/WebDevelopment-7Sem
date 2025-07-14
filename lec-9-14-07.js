// node js
// node.js - javascript runtime environment
// found - 2009 (web.js)
// to run outside the browser like a server we use node.js by the help of V8 engine
// we can integrate node.js with any c++ prog.
// node.js has v8 engine as well as libuv and evet loop
// v8 engine built on c++ , web APIs , local/session storage, cookies, etc.
// libuv built on c++, cant connect to database
// Read documentation for node.js - 1 node official 2. node github 3. libuv 4. v8 engine


console.log("SCRIPT JS");
const {sumOfTwo,xy}=require("./sumOfTwo");
//CALCULATOR
//console.log(xy);
//var xy=3000;
function sumOfTwo(a,b){
    console.log(a+b);
    return a+b;
}


function mulOfTwo(a,b){
    console.log(a*b);
    return a*b;
}


function divOfTwo(a,b){
    console.log(a/b);
    return a/b;
}
console.log("XY",xy);
sumOfTwo(10,20);
mulOfTwo(10,20);
divOfTwo(10,20);

//  xmodules is wrapped in immediate invoked function


// from file sumOfTwo.js
function sumOfTwo(a,b){
    console.log(a+b);
    return a+b;
}

module.exports = sumOfTwo;