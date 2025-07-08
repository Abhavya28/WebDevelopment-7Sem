console.log("Start Script");

// //Promises

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('rejected');
//     },3000);
// });
// myPromise
// .then((res)=> console.log(res))
// .catch((err)=> console.log(err))

// console.log(myPromise);


function placement(placementStep){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("I will get placement " +  placementStep);
        },3000);
    });
}
placement("Got Placement",5000)
.then(()=>placement("Party",2000))
.then(()=>placement("Work",4000))
.then(()=>placement("Layoff",1000))
.catch((err)=>console.log(err));