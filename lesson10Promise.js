// const isResolved = false;

// const promise = new Promise((resolve, reject) => {
//   if (isResolved) {
//     resolve("Resolved data");
//   } else {
//     reject("Rejected data");
//   }
// });
// console.log(promise);

// // catch the error if reject and then happen any work if resolve using then keyword
// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// creating timer function using promise:

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(1000).then(() => {
  console.log("Wait 1000ms");
});

wait(2000).then(() => {
  console.log("Wait 2000ms");
});

wait(3000).then(() => {
  console.log("Wait 3000ms");
});
