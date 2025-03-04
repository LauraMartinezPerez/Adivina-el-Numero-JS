'use strict'

const inputNumber = document.querySelector(".js-input-number");
const btn = document.querySelector(".js-btn");
const pista = document.querySelector(".js-pista");
const tries = document.querySelector(".js-tries");
let contador = 0;



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    
  }
const randomNumber = getRandomInt(100);
console.log(randomNumber)


btn.addEventListener("click", (ev) => {
    ev.preventDefault();
    const numberValue = inputNumber.value
    
    console.log(numberValue);

   contador = contador + 1;

    if (numberValue < 1 || numberValue > 100) {
        pista.innerHTML = "El número debe estar entre 1 y 100"
    } else {
        if (numberValue > randomNumber) {
            pista.innerHTML = "Demasiado alto"
        } else if (numberValue < randomNumber) {
            pista.innerHTML = "Demasiado bajo"
        } else {pista.innerHTML = "Has ganado campeona!"}
    }    
    
    tries.innerHTML = `Número de intentos: ${contador}`;
    
})


 
