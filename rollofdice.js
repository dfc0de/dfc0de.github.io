function rollOfDice() {
    const dice = Math.floor(Math.random() * 12) + 1;
    const prize = <a href="https://www.example.com" target="_blank">Visit Example Website</a>
    const diceOutcome = document.getElementById('diceRoll').innerText = `${dice}`;
    if (dice === 12) {
        document.getElementById('diceResult').innerText = `You rolled a ${dice}! Congratulations, you won a ${prize}! 🎉`;
    } else {
        document.getElementById('diceResult').innerText = `You rolled a ${dice}. Try again!`;
    }
}