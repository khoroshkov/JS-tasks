'use strict';

// Напишите программу, создающую строку, содержащую
// решётку 8х8, в которой линии разделяются символами
// новой строки. На каждой позиции либо пробел, либо #. В
// результате должна получиться шахматная доска.

function geterateChessBoard (size) {
    const blackCell = "#";
    const whiteCell = " ";
    let chessBoard = "\n";
    for (let row = 1; row <= size; row +=1) {
        for (let column = 1; column <= size; column +=1) {
          chessBoard += (row % 2 === column % 2) ? blackCell : whiteCell;
        }
        chessBoard += "\n";
    }
    console.log(chessBoard);
}

geterateChessBoard(8);