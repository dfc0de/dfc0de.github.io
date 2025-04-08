function updateCountdowns() {
    const now = new Date();

    // Christmas Countdown
    const christmas = new Date(now.getFullYear(), 11, 25); // December 25
    if (now > christmas) {
        christmas.setFullYear(christmas.getFullYear() + 1);
    }
    const timeToChristmas = christmas - now;
    const christmasCountdownString = formatCountdownString(timeToChristmas, "Christmas", christmas);

    document.getElementById('countdown-christmas').textContent = christmasCountdownString;

    // Ramadan Countdown
    const ramadanStart = getApproxRamadanStart(now.getFullYear());
    if (now > ramadanStart) {
        ramadanStart.setFullYear(ramadanStart.getFullYear() + 2); // Move to next cycle if passed
    }
    const timeToRamadan = ramadanStart - now;
    const ramadanCountdownString = formatCountdownString(timeToRamadan, "Ramadan", ramadanStart);

    document.getElementById('countdown-ramadan').textContent = ramadanCountdownString;

    // Easter Countdown
    const easter = calculateEaster(now.getFullYear());
    if (now > easter) {
        easter.setFullYear(easter.getFullYear() + 1);
    }
    const timeToEaster = easter - now;
    const easterCountdownString = formatCountdownString(timeToEaster, "Easter", easter);

    document.getElementById('countdown-easter').textContent = easterCountdownString;

    // Diwali Countdown
    const diwali = calculateDiwali(now.getFullYear());
    if (now > diwali) {
        diwali.setFullYear(diwali.getFullYear() + 1);
    }
    const timeToDiwali = diwali - now;
    const diwaliCountdownString = formatCountdownString(timeToDiwali, "Diwali", diwali);

    document.getElementById('countdown-diwali').textContent = diwaliCountdownString;

    // Hanukkah Countdown
    const hanukkah = calculateHanukkah(now.getFullYear());
    if (now > hanukkah) {
        hanukkah.setFullYear(hanukkah.getFullYear() + 1);
    }
    const timeToHanukkah = hanukkah - now;
    const hanukkahCountdownString = formatCountdownString(timeToHanukkah, "Hanukkah", hanukkah);

    document.getElementById('countdown-hanukkah').textContent = hanukkahCountdownString;
}

// Helper function to format countdown string
function formatCountdownString(time, eventName, eventDate) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${eventName}: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds (${eventDate.toDateString()})`;
}

// Function to calculate approximate Ramadan start date
function getApproxRamadanStart(year) {
    const baseRamadanDate = new Date(2023, 2, 23); // March 23, 2023
    const daysShift = (year - 2023) * -11; // Adjust by ~11 days per year
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

// Function to calculate Diwali date
function calculateDiwali(year) {
    const diwaliDates = {
        2023: new Date(2023, 10, 12), // Example: November 12, 2023
        2024: new Date(2024, 10, 1),  // Example: November 1, 2024
        2025: new Date(2025, 10, 9)   // Fixed: November 9, 2025
    };
    return diwaliDates[year] || new Date(year, 10, 1); // Fallback to an approximate date
}

// Function to calculate Hanukkah start date
function calculateHanukkah(year) {
    const hanukkahDates = {
        2023: new Date(2023, 11, 7),  // Example: December 7, 2023
        2024: new Date(2024, 11, 26), // Example: December 26, 2024
        2025: new Date(2025, 11, 15)  // Example: December 15, 2025
    };
    return hanukkahDates[year] || new Date(year, 11, 1); // Fallback to an approximate date
}

// Update countdowns every second
setInterval(updateCountdowns, 1000);

// Initialize countdowns
updateCountdowns();