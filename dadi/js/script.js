// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const numberButton = document.querySelector('#start-game')

// genero i numeri si per il pc che per lo user 
numberButton.addEventListener('click', function(){
    let randomPcNumber = Math.floor(Math.random() * 6) +1;
    let randomUserNumber = Math.floor(Math.random() * 6) +1;
    console.log(randomPcNumber)
    console.log(randomUserNumber)

    if (randomPcNumber > randomUserNumber) {
        alert('HAI PERSO')
    } else if(randomPcNumber < randomUserNumber) {
        alert('BRAVO HAI VINTO')
    } else {
        alert('PAREGGIO')
    }
})

