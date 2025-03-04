'use strict'

const inputNumber = document.querySelector(".js-input-number");
const btn = document.querySelector(".js-btn");
const pista = document.querySelector(".js-pista");
const tries = document.querySelector(".js-tries");



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    
  }
const randomNumber = getRandomInt(100);
console.log(randomNumber)


btn.addEventListener("click", (ev) => {
    ev.preventDefault();
    const numberValue = inputNumber.value
    console.log(numberValue);
    
})

 
