"use strict";

class LifeGame {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.generationNumber = 0;

    this.map = [];
    for (let y = 0; y < this.rows; y += 1) {
      const row = [];

      for (let x = 0; x < this.columns; x += 1) {
        row.push(false);
      }
      this.map.push(row);
    }
  }

  changeGeneration() {
    const map = [];

    for (let y = 0; y < this.rows; y += 1) {
      const row = [];

      for (let x = 0; x < this.columns; x += 1) {
        let neighborsCell = 0;
        let state = false;

        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            if (dx === 0 && dy === 0) {
              continue;
            }

            neighborsCell += this.getField(x + dx, y + dy);
          }
        }

        if (this.getField(x, y) === true) {
          if (neighborsCell === 2 || neighborsCell === 3) {
            state = true;
          }
        } else {
          if (neighborsCell === 3) {
            state = true;
          }
        }

        row.push(state);
      }

      map.push(row);
    }

    this.map = map;
    this.generationNumber += 1;
  }

  animateRandomFields(n = 1) {
    const emptyFields = [];

    for (let y = 0; y < this.rows; y += 1) {
      for (let x = 0; x < this.columns; x += 1) {
        if (this.getField(x, y) === false) {
          emptyFields.push({ x, y });
        }
      }
    }

    n = parseInt(n);
    n = Math.min(n, emptyFields.length);

    while (n > 0) {
      const index = Math.floor(Math.random() * emptyFields.length);
      const { x, y } = emptyFields.splice(index, 1)[0];
      this.setField(x, y, true);
      n--;
    }
  }

  forEachEmpty(callback) {
    for (let y = 0; y < this.rows; y += 1) {
      for (let x = 0; x < this.columns; x += 1) {
        if (this.getField(x, y) === true) {
          callback(x, y);
        }
      }
    }
  }

  getField(x, y) {
    if (x < 0 || x >= this.columns || y < 0 || y >= this.rows) {
      return false;
    }
    return this.map[y][x];
  }

  setField(x, y, value) {
    if (x < 0 || x >= this.columns || y < 0 || y >= this.rows) {
      return value;
    }
    return (this.map[y][x] = value);
  }
}