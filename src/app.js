/* eslint-disable */
import "bootstrap";
import "./style.css";

const mezcla = [];
const position = 1;
const suits = ["♦", "♥", "♠", "♣"];
const cards = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

for (let palos of cards) {
  for (let numeros of suits) {
    let num = [palos, numeros];
    mezcla.push(num);
    mezcla.sort(() => Math.random() - 0.5);
  }
}

const decksCards = () => {
  document.querySelector("#numero").innerHTML = mezcla[0];
  document.querySelector("#topSuit").innerHTML = mezcla[1];
  document.querySelector("#botSuit").innerHTML = mezcla[1];
};

start.addEventListener("click", decksCards);
/* const cambios = () => {
  let a = Math.floor(Math.random) * inicio();
  console.log(a);
};

console.log(cambios());

window.onload = function() {
  //write your code her
  console.log("Hola");
}; */
