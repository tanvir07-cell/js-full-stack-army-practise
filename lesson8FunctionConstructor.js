// console.time();

// const sum1 = new Function("a", "b", "return `The sum = ${a+b}`");
// console.log(sum1(2, 3));

// console.timeEnd();

// // it is faster then the function constructor
// console.time();

// function sum2(a, b) {
//   return a + b;
// }

// console.log(sum2(4, 6));

// console.timeEnd();

// another example to create a function constructor:
const greetFunc = new Function(
  "name",
  "email",
  `
  const fName = name.split(" ")[0];
  console.log(fName,"is that your email ?");
  console.log("Yes is that my email!");
  




`
);
console.log(greetFunc.toString());
greetFunc("Tanvir Rifat", "tanvir@gmail.com");
