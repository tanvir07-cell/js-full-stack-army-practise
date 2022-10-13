// const arr = [1, 2, 3, 4, 5, 6, false, "", NaN];

// const res = arr.reduce((prev, current) => {
//   if (current) {
//     prev.push(current.toString());
//   }

//   return prev;
// }, []);

// console.log(res);

// filter vs reduce time complexity:

const arr = [];
for (let i = 0; i < 5000000; i++) {
  arr.push(i);
}

console.time("Not optimized ");

arr.filter((num) => num % 2 === 0).map((item) => item * 2);

console.timeEnd("Not optimized ");

// using reduce method:

console.time("Optimized");
arr.reduce((prev, current) => {
  if (current % 2 === 0) {
    prev.push(current * 2);
  }

  return prev;
}, []);

console.timeEnd("Optimized");
