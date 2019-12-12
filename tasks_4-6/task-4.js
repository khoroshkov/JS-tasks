"use script";

//  Напишите функцию min, принимающую два аргумента, и
// возвращающую минимальный из них.

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(min(0, 10));
console.log(min(5, -2));
console.log(min(0, -10));
console.log(min(99874, 4567));

//================= Второй вариант ===========//

function minNumber(a, b) {
  return a < b ? a : b;
}

console.log(minNumber(0, 10));
console.log(minNumber(5, -2));
console.log(minNumber(0, -10));
console.log(minNumber(99874, 4567));