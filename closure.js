// closure niye kaaj korar jonne age lexical scoping jinis ti buja lage:

// lexical scoping : hocceh ekti parent function er moddeh jodi ekti child function thake and ei child function ti jodi parent function er sob property gula easily access korte parbe karon tara ekoi scope e ache and ta holo parent function er moddeh ! ei concept ta ke lexical scoping bole:

// closure: closure means hocceh ekti function arekti function ke return korbe and ei return function er operation e oi ager parent function er argument or variable thakbe ekei closure bole:

function sum(a) {
  return function (b) {
    return a + b;
  };
}
const add = sum(2); // a = 2 and ei a=2 ei variable ti ei ami return function e use korechi ei concept kei closure bole:

console.log(add.toString()); // sum function er vitore return kora function ti ke dekhte parbo:

console.log(add(4));
