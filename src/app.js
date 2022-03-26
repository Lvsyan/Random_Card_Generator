/* eslint-disable */
import "@popperjs/core";
import "bootstrap";
import "./style.css";

let mezcla = [];
let position = 1;
let suits = ["♦", "♥", "♠", "♣"];
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

for (let palos of cards) {
  for (let numeros of suits) {
    let num = [palos, numeros];
    mezcla.push(num);
    mezcla.sort(() => Math.random() - 0.5);
  }
}
const deckCards = () => {
  let distribuir = mezcla[position];
  document.querySelector("#numero").innerHTML = distribuir[0];
  document.querySelector("#topSuit").innerHTML = distribuir[1];
  document.querySelector("#botSuit").innerHTML = distribuir[1];

  position = position + 1;
  if (position == mezcla.length - 1) {
    document.querySelector("#numero").innerHTML = "X";
    document.querySelector("#topSuit").innerHTML = "X";
    document.querySelector("#botSuit").innerHTML = "X";
    start.disabled = true;
  }
};

window.onload = function() {
  //write your code her
  start.addEventListener("click", deckCards);
};
