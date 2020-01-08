'use strict';

// Используйте метод reduce в комбинации с concat для
// свёртки массива массивов в один массив, у которого есть
// все элементы входных массивов

const arrays = [[1, 2, 3], [4, 5], [6]];

const finalArray = arrays.reduce((acc, currentArray) => acc.concat(currentArray), [])

console.log(finalArray);
// → [1, 2, 3, 4, 5, 6]