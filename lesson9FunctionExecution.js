function A() {
  console.log("I am A");
}

function B() {
  A();
}

function C() {
  B();
  A();
}
C();

// Function execution mainly depends stack data structure.
// That means first-in-Last-out
