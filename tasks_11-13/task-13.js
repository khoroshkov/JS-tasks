"use strict";

// Подсчитайте средний возраст людей для
// каждого из столетий. Назначаем столетию людей, беря их
// год смерти, деля его на 100 и округляя:
// Math.ceil(person.died / 100).

const ancestry = JSON.parse(ANCESTRY_FILE);
const personCenturies = person => Math.ceil(person.died / 100);

function average(array) {
  function plus(a, b) {
    return a + b;
  }
  return array.reduce(plus) / array.length;
}


const groupBy = (arr,func) => {
  let group = {};
  arr.forEach(person => { 
    let century = func(person);
    let age = person.died-person.born;
    century in group ? group[century].push(age): group[century]=[age];
  });
  return group;
}



const GroupedByCentury = groupBy(ancestry, person => {return personCenturies(person)});

console.log(GroupedByCentury); // объект с массивом "век - возраст"


for (const age in GroupedByCentury) {
  console.log(`${age} century: ${average(GroupedByCentury[age])}`);
}


// → 16: 43.5
// 17: 51.2
// 18: 52.8
// 19: 54.8
// 20: 84.7
// 21: 94