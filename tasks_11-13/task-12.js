"use strict";

// Используя набор данных из примера, подсчитайте
// среднюю разницу в возрасте между матерями и их
// детьми (это возраст матери во время появления
// ребёнка). Можно использовать функцию average,
// приведённую в главе.
// Обратите внимание – не все матери, упомянутые в
// наборе, присутствуют в нём. Здесь может пригодиться
// объект byName, который упрощает процедуру поиска
// объекта человека по имени.

const ancestry = JSON.parse(ANCESTRY_FILE);
const ageDifferences = [];

function average(array) {
  function plus(a, b) {
    return a + b;
  }
  return array.reduce(plus) / array.length;
}

const byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});


ancestry.forEach(function(person) {
  if (byName[person.mother]) {
    ageDifferences.push(person.born - byName[person.mother].born);
    
  }
});
console.log(average(ageDifferences));

// → 31.2