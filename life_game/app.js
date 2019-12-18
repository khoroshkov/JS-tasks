"use strict";

const fieldSize = 6;
const rows = 60;
const columns = 60;
const backgroundColor = "rgba(208, 208, 208, 0.71)";
const lifeColor = getRandomColorRgb();
const generationTime = 1000;
let id;

const refs = {
  canvas: document.querySelector("#life-field"),
  startBtn: document.querySelector(".start-btn"),
  stopBtn: document.querySelector(".stop-btn"),
  clearBtn: document.querySelector(".clear-btn")
};

const context = refs.canvas.getContext("2d");

const lifeGame = new LifeGame(rows, columns);

refs.startBtn.addEventListener("click", startLife);
refs.clearBtn.addEventListener("click", destroyLife);
refs.stopBtn.addEventListener("click", stopLife);

refs.canvas.width = 300;
refs.canvas.height = 300;

function getRandomColorRgb() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function startLife() {
  lifeGame.animateRandomFields((rows * columns) / 2);

  id = requestAnimationFrame(tick);
}

function tick(timestamp) {
  clearCanvas();

  if (timestamp > lifeGame.generationNumber * generationTime) {
    lifeGame.changeGeneration();
  }

  lifeGame.forEachEmpty((x, y) => drawCell(x, y, lifeColor));

  id = requestAnimationFrame(tick);
}

function clearCanvas() {
  context.fillStyle = backgroundColor;
  context.beginPath();
  context.rect(0, 0, refs.canvas.width, refs.canvas.height);
  context.fill();
}

function drawCell(x, y, color) {
  context.fillStyle = color;
  context.beginPath();
  context.rect(x * fieldSize, y * fieldSize, fieldSize, fieldSize);
  context.fill();
}

function stopLife() {
  cancelAnimationFrame(id);
}

function destroyLife() {
  document.location.reload(true);
}