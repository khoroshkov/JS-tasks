'use strict';

// Напишите функцию range, принимающую два аргумента –
// начало и конец диапазона – и возвращающую массив,
// который содержит все числа из него, включая начальное
// и конечное.

const array = [];    // Переменная вынесена за функцию, чтобы посчитать потом сумму.

function range (value1, value2) {
  for (let i = value1; i <= value2; i += 1) {
    array.push(i);
  }
  return array;
}

console.log(range(1, 10));

// Затем напишите функцию sum, принимающую массив
// чисел и возвращающую их сумму. Запустите указанную
// выше инструкцию и убедитесь, что она возвращает 55.


const sum = array.reduce((acc, currentValue) => {
  return acc + currentValue;
}, 0);
  
console.log(sum);


// В качестве бонуса дополните функцию range, чтобы она
// могла принимать необязательный третий аргумент – шаг
// для построения массива. Если он не задан, шаг равен
// единице. Вызов функции range(1, 10, 2) должен будет
// вернуть [1, 3, 5, 7, 9]. Убедитесь, что она работает с
// отрицательным шагом так, что вызов range(5, 2, -1)
// возвращает [5, 4, 3, 2].


function rangeOfNumbers (start, finish, step = 1) {
  const resultArray = [];
  if (step === 0) step = 1;

  if (step > 0) {
    for (let i = start; i <= finish; i += step) 
      resultArray.push(i);
    } else {
      for (let i = start; i >= finish; i += step)
        resultArray.push(i);
    }
    return resultArray;
  }



console.log(rangeOfNumbers(1, 10, 2));
// [1, 3, 5, 7, 9]

console.log(rangeOfNumbers(5, 2, -1));
// [5, 4, 3, 2]