'use strict';

// Напишите функцию deepEqual, которая принимает два
// значения и возвращает true, только если это два
// одинаковых значения или это объекты, свойства которых
// имеют одинаковые значения, если их сравнивать
// рекурсивным вызовом deepEqual.

// Чтобы узнать, когда сравнивать величины через ===, а
// когда – объекты по содержимому, используйте оператор
// typeof. Если он выдаёт "object" для обеих величин, значит
// нужно делать глубокое сравнение. Примите во внимание
// одно дурацкое исключение, существующее по
// историческим причинам: typeof null тоже возвращает
// "object".


let obj = {here: {is: "an"}, object: 2};

function deepEqual (obj, obj2) {
  if (obj === obj2) {
    return true;
  } else if (obj == null || typeof obj != "object" ||
  obj2 == null || typeof(obj2) != "object")
{
  return false;
}

let propertiesInobj = 0;
let propertiesInobj2 = 0;
for (let property in obj) {
  propertiesInobj += 1;
}
for (let property in obj2) {
  propertiesInobj2 += 1;
  if (!(property in obj) || !deepEqual(obj[property], obj2[property])) {
      return false;        
  }
}        
return propertiesInobj === propertiesInobj2;
}



console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
