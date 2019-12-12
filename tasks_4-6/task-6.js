'use strict';

// Напишите функцию countBs, которая принимает строку в
// качестве аргумента, и возвращает количество символов
// “B”, содержащихся в строке.

function countBs (str) {
    let total = 0;
    for (let i = 0; i < str.length; i +=1) {
      str.toLowerCase().charAt(i) === "b" ? total += 1 : false;
    }
    console.log(`В строке "${str}" было найдено ${total} символа "b"`);

    //===Еще один вариант с регулярными выражениями, чтобы потренироваться в них====//

//  let total = str.toLowerCase().match(/[b]/g).length;
//  console.log(`Найдено ${total} совпадения`);
}

countBs('Bubbles');


//=====================
// Затем напишите функцию countChar, которая работает
// примерно как countBs, только принимает второй параметр
// — символ, который мы будем искать в строке (вместо
// того, чтобы просто считать количество символов “B”). 

function countChar (string, letter) {
  let result = 0;
  for (let i = 0; i < string.length; i+= 1) {
    string.toLowerCase().charAt(i) === letter.toLowerCase() ? result+=1 : false;
  }
  console.log(`В строке "${string}" найдено ${result} символа "${letter}"`);
}

countChar("JavaScript", "a");