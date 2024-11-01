function rollOfDice() {
    const dice = Math.floor(Math.random() * 12) + 1;
    document.getElementById('diceRoll').innerText = `Your dice roll is: ${dice}`;
}