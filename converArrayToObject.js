const arr = [1, 2, 3, 4, 5];
const obj = { ...arr };
console.log(obj);

// iterating this object:

// get the length of the object:
console.log(Object.keys(obj).length);

// looping the object:

for (let i = 0; i < Object.keys(obj).length; i++) {
  console.log(i, obj[i]);
}
