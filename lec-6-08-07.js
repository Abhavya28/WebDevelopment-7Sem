//promises
//what is promise?they are used to handle asynchronous operations in JavaScript.
//a promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
//a promise can be in one of three states: pending, fulfilled, or rejected.
//a promise is created using the Promise constructor, which takes a function as an argument. This function is called the executor function.
//the executor function takes two arguments: resolve and reject. The resolve function is called when the asynchronous operation is successful, and the reject function is called when the asynchronous operation fails.
//the Promise constructor returns a promise object, which can be used to handle the result of the asynchronous operation.
//the then() method is used to handle the result of the promise when it is fulfilled,   and the catch() method is used to handle the result of the promise when it is rejected.
//used to handle asynchronous operations in JavaScript, such as fetching data from an API, reading a file, or performing a time-consuming calculation.

// console.log("start");
// const myPromise = new Promise((resolve, reject) => {//callback function
//     // Simulating an asynchronous operation
//     const success = false; // Simulating success or failure
//     if (success) {
//         resolve("Operation was successful!");
//     } else {
//         reject("Operation failed.");
//     }
// });
// myPromise
//     .then((result) => {
//     console.log(result); // This will run if the promise is resolved
//     })
//     .catch((error) => {
//         console.error(error); // This will run if the promise is rejected
//     })
//     .finally(() => {
//         console.log("Promise handling completed."); // This will always run
//     });

//error handling in promises
//the catch() method is used to handle errors in promises. It is called when the promise is rejected.
//the finally() method is used to execute code after the promise is settled, regardless of whether it was fulfilled or rejected. It is useful for cleanup operations or final actions that should always occur.


// const placement = new Promise((resolve) => { setTimeout(() => { resolve("Placed"); }, 2000); });


// placement.then((res) => {
//     console.log(res);
//     return new Promise((res) => {setTimeout(() => {res("party");}, 2000);})
// }).then((res) => {
//     console.log(res);
//     return new Promise((res) => {setTimeout(() => {res("joining");}, 2000);});
// }).then((res) => {
//     console.log(res);
//     return new Promise((res) => {setTimeout(() => {res("layoff");}, 2000);});
// }).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.error(err);
// }).finally(() => {
//     console.log("Placement process completed.");
// })

//or
// placement("Got Placement", 5000)
//   .then(() => placement("Party", 2000))
//   .then(() => placement("Work", 4000))
//   .then(() => placement("Layoff", 1000))
//   .catch((err) => console.log(err));





//promise api are methods that allow you to work with promises in a more convenient way. They provide a way to handle multiple promises and perform actions when all or any of them are resolved or rejected.
//some common promise APIs are:
// Promise.all(): takes an array of promises and returns a single promise that resolves when all the promises in the array are resolved, or rejects if any of the promises are rejected.
//promise.allSettled(): takes an array of promises and returns a single promise that resolves when all the promises in the array are settled (either resolved or rejected). It returns an array of objects that contain the status and value of each promise.
// Promise.race(): takes an array of promises and returns a single promise that resolves or rejects as soon as one of the promises in the array resolves or rejects. It returns the value of the first resolved promise or the reason of the first rejected promise.
// Promise.any(): takes an array of promises and returns a single promise that resolves when any of the promises in the array resolves. If all promises are rejected, it returns an AggregateError containing all rejection reasons.


// const prom1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 1 resolved");
//     }, 4000);
// });
// const prom2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 2 resolved");
//     }, 4000);
// });
// const prom3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 3 resolved");
//     }, 4000);
// });
// const prom4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Promise 4 not resolved");
//     }, 4000);
// });

// Promise.all([prom1, prom2, prom3, prom4])
//     .then((results) => {
//         console.log("All promises resolved:", results);
//     }).catch((error) => {
//         console.error("Error in promises:", error);
//     });

// Promise.allSettled([prom1, prom2, prom3, prom4])
//     .then((results) => {
//         console.log("All promises settled:", results);
//     }).catch((error) => {
//         console.error("Error in promises:", error);
//     })

// Promise.race([prom1, prom2, prom3, prom4])
//     .then((result) => {
//         console.log("First promise resolved:", result);
//     }).catch((error) => {
//         console.error("Error in promises:", error);
//     });

// Promise.any([prom1, prom2, prom3, prom4])
//     .then((result) => {
//         console.log("First promise resolved:", result);
//     }).catch((error) => {
//         console.error("All promises rejected:", error);
//     });

console.log("chlo ji");