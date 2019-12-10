'use strict';

//Напишите цикл, который за 7 вызовов console.log
//выводит такой треугольник.

let smbl = '#';
while (smbl.length <= 7) {
  console.log(smbl + "\n");
  smbl += "#";
}


// Hаписал функцию, чтобы переменные могли задаваться при вызове. 



function drawAnything(obj, quantity) {
  let str = " ";
   for (let i = 1; i <= quantity; i++) {
    str+= obj;
    console.log(str);
  }
}

drawAnything('#', 7);