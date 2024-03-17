/* eslint-disable */
import "./style.css";

const suits = ["Heart", "Diamond", "Spade", "Club"];
const values = [
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
let upperSymbol = document.querySelector("#upper-symbol");
let number = document.querySelector("#number");
let bottomSymbol = document.querySelector("#bottom-symbol");

function chosenCard(arr1, arr2) {
  let card = [];
  card.push(arr1[Math.floor(Math.random() * arr1.length)]);
  card.push(arr2[Math.floor(Math.random() * arr2.length)]);
  return card;
}

function assignColor(arr) {
  if (arr[0] === "Heart" || arr[0] === "Diamond") {
    upperSymbol.style.color = "red";
    number.style.color = "red";
    bottomSymbol.style.color = "red";
  } else {
    upperSymbol.style.color = "black";
    number.style.color = "black";
    bottomSymbol.style.color = "black";
  }
}

function assignSuit(arr) {
  if (arr[0] === "Heart") {
    upperSymbol.innerHTML = "♥";
    bottomSymbol.innerHTML = "♥";
  } else if (arr[0] === "Diamond") {
    upperSymbol.innerHTML = "♦";
    bottomSymbol.innerHTML = "♦";
  } else if (arr[0] === "Club") {
    upperSymbol.innerHTML = "♣";
    bottomSymbol.innerHTML = "♣";
  } else {
    upperSymbol.innerHTML = "♠";
    bottomSymbol.innerHTML = "♠";
  }
}

function assignValue(arr) {
  number.innerHTML = arr[1];
}
function cardGenerator() {
  let card = chosenCard(suits, values);
  assignColor(card);
  assignSuit(card);
  assignValue(card);
}

window.onload = function() {
  cardGenerator();
};
