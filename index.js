let randomNum = parseInt(Math.random() * 100 + 1);
const form = document.querySelector('.form');
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const resultParas = document.querySelector('.resultParas');
const p = document.createElement('p');


let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGame(guess);
    })

}

function validateGame(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1');
    } else if (guess > 100) {
        alert('Please enter a number lesser than 100');
    }
    else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNum}`)
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage(`Game Over. You won! The number was ${randomNum}`)
        endGame();
    } else if (guess < randomNum) {
        displayMessage(`Number entered is verry Lowwww`)
    }
    else if (guess > randomNum) {
        displayMessage(`Number entered is verry Highhhh`)
    }
}



function displayGuess(guess) {
    userInput.value = '';
    guesses.innerHTML += `${guess} `
    numGuess++;
    lastResult.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame"> Start new Game </h2>`
    resultParas.appendChild(p);
    playGame=false;
    newGame();
}
function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guesses.innerHTML = '';
        lastResult.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        resultParas.removeChild(p);
        playGame = true;
    })
}



// form.addEventListener('submit', function(event){
//     event.preventDefault();
//    const guessField = document.querySelector('#guessField').value;
//     console.log(guessField);
// })