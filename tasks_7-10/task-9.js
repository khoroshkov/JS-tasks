'use strict';

// Напишите функцию arrayToList, которая строит такую
// структуру, получая в качестве аргумента [1, 2, 3], а также
// функцию listToArray, которая создаёт массив из списка.

function arrayToList (array) {
   const list = {value: array.shift(), rest: (array.length === 0) ? null : arrayToList(array)}
   return list;
   
}

console.log(arrayToList([10, 20, 30, 40, 50]));



function listToArray (list) {
 const resultArray = [];

 while(list.rest !== null) {
  resultArray.push(list.value);
  list = list.rest;
 }

 resultArray.push(list.value);

 return resultArray;
}



console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

// Также напишите вспомогательную функцию prepend,
// которая получает элемент и создаёт новый список, где
// этот элемент добавлен спереди к первоначальному
// списку. 


function prepend (el, list) {
  return {value: el, rest: list}
}

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

// и функцию nth, которая в качестве аргументов
// принимает список и число, а возвращает элемент на
// заданной позиции в списке или же undefined в случае
// отсутствия такого элемента. ------ хз, вот тут я сломал мозг!!!! )))


function nth (list, index, current =  0) {
    if (index === current) {
      return list.value;
    }
    else {
      if (list != null) {
        return nth(list.rest, index, current +1);
      }
      else {
        return undefined;
      }
    }
}



console.log(nth(arrayToList([10, 20, 30, 45, 55]), 4));
// → 55