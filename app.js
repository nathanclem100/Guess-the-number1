const randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");

guessButton.addEventListener("click", () => {
    const userGuess = parseInt(guessInput.value);
    guesses++;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${guesses} guesses.`;
        message.style.color = "green";
        guessButton.disabled = true;
    } else if (userGuess < randomNumber) {
        message.textContent = "Try a higher number.";
        message.style.color = "red";
    } else if (userGuess > randomNumber) {
        message.textContent = "Try a lower number.";
        message.style.color = "red";
    }

    guessInput.value = "";
});
