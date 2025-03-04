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


const handleClick = (ev) => {
    ev.preventDefault();
    const numberValue = parseInt(inputNumber.value);
    
    console.log(numberValue);

   contador = contador + 1;

    if (numberValue < 1 || numberValue > 100 || !numberValue) {
        pista.innerHTML = "El número debe estar entre 1 y 100"
    } 
    else {
        if (numberValue > randomNumber) {
            pista.classList.remove("pista");
            pista.classList.add("orange");
            pista.innerHTML = "Ojito cuidao! que el número es Demasiado alto"
        } else if (numberValue < randomNumber) {
            pista.classList.remove("pista");
            pista.classList.add("orange");
            pista.innerHTML = "Ojito cuidao! que el número es Demasiado bajo"
        }

         else if(numberValue === randomNumber) {
            pista.classList.remove("pista");
            pista.classList.add("green");
            pista.innerHTML = "Oleeeeeee!!! Has ganado campeona!!!"}
    }    
    
    tries.innerHTML = `Número de intentos: ${contador}`;
    
}

btn.addEventListener("click", handleClick);
 
