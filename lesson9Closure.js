function greeting(name) {
  let msg = "Hello";
  function greetingName() {
    return `${msg} ${name}`;
  }
  return greetingName;
}

const closureFunc = greeting("Tanvir Rifat");
console.log(closureFunc());

// Here closureFunc variable reference the greetingName function. so that's why outer scope of greeting function also access the msg variable and print this greetingName() function
