function updateClock() {
    const now = new Date();
    const isDST = now.getMonth() >= 2 && now.getMonth() <= 9; // DST applies from March to October
    const localOffset = isDST ? 1 : 0; // UTC+1 during DST, UTC+0 otherwise

    // Local time (London)
    const localTime = new Date(now.getTime() + localOffset * 60 * 60 * 1000);
    const localHours = String(localTime.getUTCHours()).padStart(2, '0');
    const localMinutes = String(localTime.getUTCMinutes()).padStart(2, '0');
    const localSeconds = String(localTime.getUTCSeconds()).padStart(2, '0');
    const localTimeString = `${localHours}:${localMinutes}:${localSeconds}`;
    document.getElementById('local-time').textContent = localTimeString;

    // Claremorris time
    const claremorrisTime = localTime; // Claremorris shares the same time as London
    const claremorrisHours = localHours;
    const claremorrisMinutes = localMinutes;
    const claremorrisSeconds = localSeconds;
    const claremorrisTimeString = `${claremorrisHours}:${claremorrisMinutes}:${claremorrisSeconds}`;
    document.getElementById('claremorris-time').textContent = claremorrisTimeString;
}

// Update the clocks every second
setInterval(updateClock, 1000);

// Initialize the clocks
updateClock();