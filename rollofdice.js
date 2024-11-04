function rollOfDice() {
    const dice = Math.floor(Math.random() * 12) + 1;
    document.getElementById('diceRoll').innerText = `wahoo it's... ${dice} !!`;
}