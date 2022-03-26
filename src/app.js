/* eslint-disable */
import "@popperjs/core";
import "bootstrap";
import "./style.css";

//Constantes o variables
let mezcla = [];
let position = 1;
let suits = ["♦", "♥", "♠", "♣"];
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

//Funcion para recorrer cartas y palos al azar
const generaCarta = () => {
  for (let palos of cards) {
    for (let numeros of suits) {
      let num = [palos, numeros];
      mezcla.push(num);
      mezcla.sort(() => Math.random() - 0.5);
    }
  }
  return mezcla;
};
generaCarta();

const aleatorio = () => {
  mezcla.sort(() => Math.random() - 0.5);
  return mezcla;
};

const borrarCarta = () => {
  mezcla = aleatorio(mezcla);
  position = 0;
  document.querySelector("#numero").innerHTML = "";
  document.querySelector("#topSuit").innerHTML = "";
  document.querySelector("#botSuit").innerHTML = "";
  start.disabled = false;
};

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

//Window onload
window.onload = function() {
  //write your code her
  start.addEventListener("click", deckCards);
  reset.addEventListener("click", borrarCarta);
};
