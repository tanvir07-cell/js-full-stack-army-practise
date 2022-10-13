const arr = [];
const arrToObj = {};

for (let i = 0; i < 100; i++) {
  const data = {
    id: i,
    value: i,
  };
  arr.push(data);
  arrToObj[i] = data;
}

// for array time complexity:

console.time("timr");
const id = 60;
const findObjInArray = arr.find((obj) => obj.id === id);
findObjInArray.value = 6000;

console.log(findObjInArray);

console.timeEnd("timr");

// for object time complexity:

console.time("Obj Complexity");
const objFindId = "94";

arrToObj[objFindId] = {
  ...arrToObj[objFindId],
  value: 94000,
};

console.timeEnd("Obj Complexity");

console.log(arrToObj);
