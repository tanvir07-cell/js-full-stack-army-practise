// generator all time iterator return kore. iterator er kaajke sohoj korar jonnei ei generator eseche!

// remember : * alltime use kora laagbe and yield keyword ti use kora laagbe jah iterator er property value hishebe thakbe

// function* generatorFunc() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const iterator = generatorFunc();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// niche nijer ischa moto range niye generator niye kaaj kora:

function* range(start = 0, stop = 10, step = 2) {
  for (let i = start; i <= stop; i = i + step) {
    yield i;
  }
}

let rangeIterator = range();
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
