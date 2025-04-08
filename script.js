function updateCountdown() {
    const now = new Date();
    const christmas = new Date(now.getFullYear(), 11, 25); // December 25 of the current year

    // Check if Christmas has passed this year, if so, use next year
    if (now > christmas) {
        christmas.setFullYear(christmas.getFullYear() + 1);
    }

    const timeDifference = christmas - now; // Time in milliseconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const countdownString = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    document.getElementById('countdown').textContent = countdownString;
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initialize countdown
updateCountdown();