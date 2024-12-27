const randomNum = parseInt(Math.random()*100+1);
const form = document.querySelector('.form');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
form.addEventListener('submit', function(event){
    event.preventDefault();
   const guessField = document.querySelector('#guessField').value;
    console.log(guessField);
})