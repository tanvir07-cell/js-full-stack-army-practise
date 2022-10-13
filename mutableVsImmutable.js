const mainObj = {
  name: "Tanvir Rifat",
  age: 25,
};

// immutable actions haapening(because we don't update mainObj we copy the mainObj and then update it:)
const copyObj = {
  ...mainObj,
  name: "Tanvir Hassan Rifat",
};
console.log(copyObj);

// nicher mainObject ti change hoy nai:
console.log(mainObj);
