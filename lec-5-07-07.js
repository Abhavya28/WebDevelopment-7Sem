//prototype methods
// Array.prototype.map, filter, reduce
//prototypes are used to add new methods to existing objects
//prototypes are built-in objects that allow us to add new methods to existing objects

console.log("start");
let arr = [2, 4, 5, 6, 7, 8];
const newArr = arr.map((x) => x * 2);
console.log(newArr);

function doubleData(x) {
  return x * x;
}

Array.prototype.mapReplica = function (logic) {
    let outputArray = [];
    for (let i = 0; i < this.length; i++) {
    outputArray.push(logic(this[i]));

    }
    return outputArray;
};
const myPrototype = arr.mapReplica(doubleData);
console.log(myPrototype);


Array.prototype.filterReplica = function (logic) {
    const outputArray = [];
    for (let i = 0; i < this.length; i++) {
    if (logic(this[i])) {
        outputArray.push(this[i]);
    }
}
    return outputArray;
};
function isEven(x) {
    return x % 2 === 0;
}
const myFilter = arr.filterReplica(isEven);
console.log(myFilter);  


//callback functions are functions that are passed as arguments to other functions
//used here to get the sum of all elements in an array
//reduce is used to reduce an array to a single value
const initialValue = 0;
Array.prototype.reduceReplica = function (logic, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = logic(accumulator, this[i]);
    }
    return accumulator;
};
function sum(accumulator, currentValue) {
    return accumulator + currentValue;
}

const myReduce = arr.reduceReplica(sum, initialValue);
console.log(myReduce);