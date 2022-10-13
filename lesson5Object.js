// object literals:

const obj = {
  name: "Tanvir Rifat",
  age: 24,
  hobby: () => {
    return "Gym and Coding";
  },

  toString() {
    return this.name;
  },
};

// freezing any object . that's why new Property doesn't added to the object:
Object.freeze(obj);

// adding new property in the object using newProperty:

obj.newProperty = "This is the new Property";
console.log(obj);
console.log(obj.toString());
