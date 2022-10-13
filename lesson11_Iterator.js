// const name = "Tanvir";
// // Here nameIterator is a function and it returns an object:{value:"",done:false/true}
// const nameIterator = name[Symbol.iterator]();

// console.log(nameIterator.next());

// console.log(nameIterator.next());
// console.log(nameIterator.next());
// console.log(nameIterator.next());
// console.log(nameIterator.next());
// console.log(nameIterator.next());

// console.log(nameIterator.next());

// ekhon dekha jak object kintu iterable nah but amra nijer moto iterator create kore object ke iterable korte pari:
const range = {
  start: 10,
  stop: 20,
  step: 1,
};

// user defined iterator:
range[Symbol.iterator] = function () {
  // accessing range object's propterty using this:
  let start = this.start;
  const stop = this.stop;
  const step = this.step;

  return {
    next() {
      const obj = {
        value: start,
        done: start > stop,
      };

      start += step;

      return obj;
    },
  };
};

const rangeIterator = range[Symbol.iterator]();

console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
