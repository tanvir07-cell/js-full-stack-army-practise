console.log("Iterator");

// Array is iterable and Object is not iterable

// If an object has Symbol[iterator] it is the iterable otherwise it is not iterable.Like Array has Symbol[iterator] but an object has not Symbol[iterator]. That's why object is not iterable

// const arr = ["Tanvir", "Rifat", "is", "a", "Passionate", "Programmer"];
// console.dir(arr); // arr has Symbol.iterator. So that's why for of loop is applicable in array.
// for (const element of arr) {
//   console.log(element);
// }

// const obj = {
//   name: "Tanvir Rifat",
//   age: 21,
//   email: "tanvir@example.com",
// };

// console.dir(obj); // obj has not Symbol.iterator proto. That's why object is not iterable

// for (const element of obj) {
//   console.log(element);
// }

// Apply iterator concept(iterator concept helps because it gives us flexibility that the loop not provide us. We iterate the object and print any element our choices using iterator)

const iterateArr = [1, 2, 3, 4, 5];
const iterator = iterateArr[Symbol.iterator]();
console.log(iterator); //returns an iterator object

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
