const a = 4;
const b = 5;

// logs and evaluate/compute
console.log(a + b);

// logs the (current) Directory/path name 
console.log(__dirname);

// setTimeout(() => {
//     console.log(a + b);
// }, 3000);

// Import module using require (common js way)
const script2 = require('./script2.js');

const num1 = script2.largeNumber;
const num2 = 5;

console.log(num1 + num2);