document.getElementById('colorButton').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';
});


const randomNumber = Math.floor(Math.random() * 10) + 1;
document.getElementById('submitGuess').addEventListener('click', function() {
    const userGuess = Number(document.getElementById('guess').value);
    const result = document.getElementById('result');
    if (userGuess === randomNumber) {
        result.textContent = 'Congratulations! You guessed correctly!';
    } else {
        result.textContent = 'Try again!';
    }
});
