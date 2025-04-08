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

    // Ramadan Countdown
    const ramadanYear = now.getFullYear();
    const ramadanStart = getApproxRamadanStart(ramadanYear);
    if (now > ramadanStart) {
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

    // Easter Countdown
    const easter = calculateEaster(now.getFullYear());
    if (now > easter) {
        easter.setFullYear(easter.getFullYear() + 1);
    }
    const timeToEaster = easter - now;
    const daysEaster = Math.floor(timeToEaster / (1000 * 60 * 60 * 24));
    const hoursEaster = Math.floor((timeToEaster % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesEaster = Math.floor((timeToEaster % (1000 * 60 * 60)) / (1000 * 60));
    const secondsEaster = Math.floor((timeToEaster % (1000 * 60)) / 1000);

    const easterCountdownString = `${daysEaster} days, ${hoursEaster} hours, ${minutesEaster} minutes, ${secondsEaster} seconds`;
    document.getElementById('countdown-easter').textContent = `Easter: ${easterCountdownString}`;
}

// Function to calculate approximate Ramadan start date
function getApproxRamadanStart(year) {
    const baseRamadanDate = new Date(2023, 2, 23); // Example: March 23, 2023
    const daysShift = (year - 2023) * -11; // Adjust ~11 days per year
    return new Date(baseRamadanDate.getTime() + (daysShift * 24 * 60 * 60 * 1000));
}

// Function to calculate Easter Sunday
function calculateEaster(year) {
    let a = year % 19;
    let b = Math.floor(year / 100);
    let c = year % 100;
    let d = Math.floor(b / 4);
    let e = b % 4;
    let f = Math.floor((b + 8) / 25);
    let g = Math.floor((b - f + 1) / 3);
    let h = (19 * a + b - d - g + 15) % 30;
    let i = Math.floor(c / 4);
    let k = c % 4;
    let l = (32 + 2 * e + 2 * i - h - k) % 7;
    let m = Math.floor((a + 11 * h + 22 * l) / 451);
    let month = Math.floor((h + l - 7 * m + 114) / 31);
    let day = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(year, month - 1, day); // Returns Easter as a Date object
}

// Update countdowns every second
setInterval(updateCountdowns, 1000);

// Initialize countdowns
updateCountdowns();