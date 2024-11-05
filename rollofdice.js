// this is the link to the prize you win when rolling a 12
const prize = "https://www.jdwetherspoon.com/wp-content/uploads/menus/currentmenus/MENU_255.pdf";

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