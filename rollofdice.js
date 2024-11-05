// this is the link to the prize you win when rolling a 12
const prize = "https://www.google.com";

//this is the dice roll function
function rollOfDice() {
    const dice = Math.floor(Math.random() * 12) + 1;
    const diceOutcome = document.getElementById('diceRoll').innerText = `${dice}`;
    if (dice === 12) {
        const prizeLink = `<a href="${prize}" target="_blank">prize</a>`;
        document.getElementById('diceResult').innerHTML = `You rolled a ${dice}! Congratulations, you won a ${prizeLink}! 🎉`;
    } else {
        document.getElementById('diceResult').innerText = `You rolled a ${dice}. Try again!`;
    }
}