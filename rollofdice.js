// this is the link to the prize you win when rolling a 12
const prize = "https://www.jdwetherspoon.com/wp-content/uploads/menus/currentmenus/MENU_255.pdf";

//this is the dice roll function
function rollOfDice() {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const diceOutcome = document.getElementById('diceRoll').innerText = `${dice}`;
    if (dice1 + dice2 === 12) {
        const prizeLink = `<a href="${prize}" target="_blank">prize</a>`;
        document.getElementById('diceResult').innerHTML = `Way to go! Click here to claim your ${prizeLink}! 🎉`;
    } else {
        document.getElementById('diceResult').innerText = `Better luck next time. Thanks for playing.`;
    }
}