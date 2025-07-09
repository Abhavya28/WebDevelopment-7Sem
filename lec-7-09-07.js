//Use of async/await in JavaScript

console.log("Start Script");

// async function fetchDataProducts(){
//     const data = await fetch('https://dummyjson.com/products');
//     const finalData = await data.json();
//     console.log(finalData);
// }
// fetchDataProducts();

// const promise = new Promise((resolve,reject)=>{
//     setTimeout(() =>{
//         resolve("I will complete assignment by 1 pm")
//     },3000);
// })
// async function checkAssignment(){
//     const assignmentData = await promise;
//     console.log(assignmentData);
// }
// checkAssignment();

// ----------------------------------------------------------------------------------------------------

// Event Capturing and Bubbling
// const grandparent = document.getElementById("grandparent");
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// grandparent.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("Grandparent clicked");
// });
// parent.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("Parent clicked");
// });
// child.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("Child clicked");
// });

//-----------------------------------------------------------------------------------------------------

// function admissionProcess(studentName, studentClass) {
//     console.log(`Hi ${this.studentName}, from Class: ${this.studentClass}`);
// }

// const student1 = {
//     studentName: "Abhavya",
//     studentClass: "G5",
// }
// const student2 = {
//     studentName: "Avi",
//     studentClass: "G6",
// }

// //using call()
// admissionProcess.call(student1);
// admissionProcess.call(student2);

function admissionProcess(studentZone, studentCampus) {
    console.log(`Hi ${this.studentName}, from Class: ${this.studentClass}. Your  zone is ${studentZone} and campus is ${studentCampus}.`);
}
const student1 = {
    studentName: "Abhavya",
    studentClass: "G5",
}
const student2 = {
    studentName: "Avi",
    studentClass: "G6",
}
// call() -> Immediate invoke function, we pass arguments as individual values
// admissionProcess.call(student1,"Zeta","Punjab Campus");
// admissionProcess.call(student2,"Beta","Rajpura Campus");

// apply() -> Immediate incoke fcn, we pass arguments as an array
// admissionProcess.apply(student1,["Zeta","Punjab Campus"]);
// admissionProcess.apply(student2,["Beta","Rajpura Campus"]);

// binds() -> we call the fcn manually, we dont pass arguments as an array
// const b1 = admissionProcess.bind(student1,"Zeta","Punjab Campus");
// const b2 = admissionProcess.bind(student2,"Beta","Rajpura Campus");
// b1();
// b2();

// ------------------------------------------------------------------------------------------------------

//Assignment 1:
// create https//dummyjson.com/products -> in div product name,pic,description,price
