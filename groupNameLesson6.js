const names = [
  "Ayman",
  "Abu Rayhan",
  "Anik",
  "Elias Emon",
  "Engr Sabbir",
  "Fahim Faisal",
  "Feroz Khan",
  "Habib",
  "HM Azizul",
  "Hridoy Saha",
  "Jahid Hassan",
  "Johir",
  "Md Al-Amin",
  "MD Arafatul",
  "MD Ashraful",
  "Parvez",
];

// const res = names.reduce((prev, cur) => {
//   const firstLetter = cur[0].toUpperCase();
//   if (firstLetter in prev) {
//     prev[firstLetter].push(cur);
//   } else {
//     prev[firstLetter] = [cur];
//   }
//   return prev;
// }, {});

// Object.keys(res).forEach((groupedName) => {
//   console.log("----------", groupedName, "----------", "\n");
//   console.log(res[groupedName]);
// });

// const namesGrouped = {
// 	A: ['Ayman', 'Aby Rayhan', 'Anik'],
// 	E: ['Elias Emon', 'Engr Sabbid'],
// 	F: ['Fahim Faisal', 'Feroz Khan'],
// };

// converting this array like upper namesGrouped object:

const groupName = names.reduce((prev, current) => {
  const firstLetter = current[0].toUpperCase();

  if (firstLetter in prev) {
    prev[firstLetter].push(current);
  } else {
    prev[firstLetter] = [current];
  }

  return prev;
}, {});

console.log(groupName);
