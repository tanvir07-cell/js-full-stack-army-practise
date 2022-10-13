// // pure function

// const add = (a, b) => a + b;
// console.log(add(2, 4));
// console.log(add(2, 4));

// // uporer function tir ekoi input er jonne all time ekoi rokom output astese tai eti ekti pure function

// // impure function:
// let x = 100;
// function impure() {
//   x = 500;
//   return x;
// }
// console.log(x); //x = 100
// console.log(impure()); //x = 500;

// // Here this is the impure function because it's has different output and it's has no hand to take input and it's works with the global variable x;

// Higher order function rules:
// 1. Function takes another function as an arguments
// 2. Function returns another function

// 1. Function takes another function as an arguments:

// function mainFunc(cb) {
//   return cb(10, 20);
// }

// const sum = (a, b) => a + b;

// console.log(mainFunc(sum));

// // for sub:
// const sub = (a, b) => Math.abs(a - b);
// console.log(mainFunc(sub));

function power(p) {
  return (n) => {
    let result = 1;
    for (let i = 1; i <= p; i++) {
      result = result * n;
    }
    return result;
  };
}

console.log(power(3)(2));
