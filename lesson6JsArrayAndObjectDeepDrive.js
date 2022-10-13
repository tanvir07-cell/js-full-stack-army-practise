// utilitie function to generate a unique id:
function uuid(mask = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx") {
  return `${mask}`.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// creating students information:
// const students = [
//   {
//     id: "93a850b4-1c67-4a2e-bb35-ea30722cc594",
//     name: "Tanvir Hassan Rifat",
//     email: "tanvir@gmail.com",
//   },
//   {
//     id: "36f6b091-6604-4207-9564-cf0e7cf21682",
//     name: "Arafat Hassan Riman",
//     email: "arafat@gmail.com",
//   },
//   {
//     id: "306932e2-51d0-4c4b-8447-eb25c780be47",
//     name: "Sazzad Hassan ",
//     email: "sazzad@gmail.com",
//   },
// ];

// adding a new student:

// students.push({
//   id: uuid(),
//   name: "Akash Rahman",
//   email: "akash@gmail.com",
// });

// //updating a student :
// const id = "306932e2-51d0-4c4b-8447-eb25c780be47";
// const findUpdateStdIndex = students.findIndex((std) => std.id === id);

// let updatedStudentInfo = {
//   name: "Najmul",
// };

// students[findUpdateStdIndex] = {
//   ...students[findUpdateStdIndex],
//   // ...students[findUpdateStdIndex] er means hocceh age jei data gula chilo seigulao thakbe
//   ...updatedStudentInfo,
// };

// console.log(students);

// working in object using array's all operation and see why object is best:
const students = {
  "93a850b4-1c67-4a2e-bb35-ea30722cc594": {
    id: "93a850b4-1c67-4a2e-bb35-ea30722cc594",
    name: "Tanvir Hassan Rifat",
    email: "tanvir@gmail.com",
  },
  "36f6b091-6604-4207-9564-cf0e7cf21682": {
    id: "36f6b091-6604-4207-9564-cf0e7cf21682",
    name: "Arafat Hassan Riman",
    email: "arafat@gmail.com",
  },
  "306932e2-51d0-4c4b-8447-eb25c780be47": {
    id: "306932e2-51d0-4c4b-8447-eb25c780be47",
    name: "Sazzad Hassan ",
    email: "sazzad@gmail.com",
  },
};

// adding a new object to the object:
const std = {
  id: uuid(),
  name: "gazi rajin",
  email: "gazi@gmail.com",
};

students[std.id] = std;

// updating an object:
const updatedId = "306932e2-51d0-4c4b-8447-eb25c780be47";
const updatedStd = {
  name: "Sazzad Hassan Updated",
};
console.log(students[updatedId]);
students[updatedId] = {
  ...students[updatedId],
  ...updatedStd,
};

// iterating object using for...in object:
for (const key in students) {
  console.log(students[key].name);
}

// Object.values(students) return an array:
Object.values(students).forEach((student) => console.log(student.email));

// console.log(students);
