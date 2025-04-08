function updateCountdowns() {
    const now = new Date();
    
    // Christmas Countdown
    const christmas = new Date(now.getFullYear(), 11, 25); // December 25 of the current year
    if (now > christmas) {
        christmas.setFullYear(christmas.getFullYear() + 1);
    }
    const timeToChristmas = christmas - now;
    const daysChristmas = Math.floor(timeToChristmas / (1000 * 60 * 60 * 24));
    const hoursChristmas = Math.floor((timeToChristmas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesChristmas = Math.floor((timeToChristmas % (1000 * 60 * 60)) / (1000 * 60));
    const secondsChristmas = Math.floor((timeToChristmas % (1000 * 60)) / 1000);

    const christmasCountdownString = `${daysChristmas} days, ${hoursChristmas} hours, ${minutesChristmas} minutes, ${secondsChristmas} seconds`;
    document.getElementById('countdown-christmas').textContent = `Christmas: ${christmasCountdownString}`;

    // Ramadan Countdown
    const ramadan = new Date(now.getFullYear(), 2, 10); // Example: March 10 of the current year
    if (now > ramadan) {
        ramadan.setFullYear(ramadan.getFullYear() + 1);
    }
    const timeToRamadan = ramadan - now;
    const daysRamadan = Math.floor(timeToRamadan / (1000 * 60 * 60 * 24));
    const hoursRamadan = Math.floor((timeToRamadan % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesRamadan = Math.floor((timeToRamadan % (1000 * 60 * 60)) / (1000 * 60));
    const secondsRamadan = Math.floor((timeToRamadan % (1000 * 60)) / 1000);

    const ramadanCountdownString = `${daysRamadan} days, ${hoursRamadan} hours, ${minutesRamadan} minutes, ${secondsRamadan} seconds`;
    document.getElementById('countdown-ramadan').textContent = `Ramadan: ${ramadanCountdownString}`;
}

// Update countdowns every second
setInterval(updateCountdowns, 1000);

// Initialize countdowns
updateCountdowns();