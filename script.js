function updateCountdowns() {
    const now = new Date();

    // Christmas Countdown
    const christmas = new Date(now.getFullYear(), 11, 25); // December 25
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

    // Ramadan Countdown (Approximation based on lunar calendar)
    // Ramadan starts roughly 10-12 days earlier each year (Islamic year is ~354 days)
    const ramadanYear = now.getFullYear();
    const ramadanStart = getApproxRamadanStart(ramadanYear);
    if (now > ramadanStart) {
        // If Ramadan has already passed this year, calculate for next year
        const nextRamadanYear = ramadanYear + 1;
        ramadanStart.setFullYear(nextRamadanYear);
    }
    const timeToRamadan = ramadanStart - now;
    const daysRamadan = Math.floor(timeToRamadan / (1000 * 60 * 60 * 24));
    const hoursRamadan = Math.floor((timeToRamadan % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesRamadan = Math.floor((timeToRamadan % (1000 * 60 * 60)) / (1000 * 60));
    const secondsRamadan = Math.floor((timeToRamadan % (1000 * 60)) / 1000);

    const ramadanCountdownString = `${daysRamadan} days, ${hoursRamadan} hours, ${minutesRamadan} minutes, ${secondsRamadan} seconds`;
    document.getElementById('countdown-ramadan').textContent = `Ramadan: ${ramadanCountdownString}`;
}

// Function to calculate approximate Ramadan start date
function getApproxRamadanStart(year) {
    // Example approximation based on known previous dates
    // Ramadan starts 10-12 days earlier each year, adjust accordingly
    const baseRamadanDate = new Date(2023, 2, 23); // March 23, 2023 (Example)
    const daysShift = (year - 2023) * -11; // Shift backward by ~11 days per year
    const approxRamadanStart = new Date(baseRamadanDate.getTime() + (daysShift * 24 * 60 * 60 * 1000));
    return approxRamadanStart;
}

// Update countdowns every second
setInterval(updateCountdowns, 1000);

// Initialize countdowns
updateCountdowns();