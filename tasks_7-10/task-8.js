'use strict';

// В качестве упражнения напишите две функции, reverseArray и
// reverseArrayInPlace. Первая получает массив как
// аргумент и выдаёт новый массив – с обратным порядком
// элементов. 

function reverseArray (array) {
  const reversedArray = [];

  for (let i = array.length -1; i >= 0; i -- ) {
    reversedArray.push(array[i])
  }

  console.log(reversedArray);
}

reverseArray(["A", "B", "C", "D", "E"])



// Вторая работает как оригинальный метод
// reverse – она меняет порядок элементов на обратный в
// том массиве, который был ей передан в качестве
// аргумента. Не используйте стандартный метод reverse.


function reverseArrayInPlace (array) {
  const reversedArray = [];

  for (let i = array.length -1; i >= 0; i -- ) {
    reversedArray.push(array[i])
  }
  return array = reversedArray;
}

console.log(reverseArrayInPlace(["A", "B", "C", "D", "E", "F"]));