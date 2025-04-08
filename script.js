function updateClock() {
    const now = new Date();
  
// Local time (James Hall)
const isDST = now.getMonth() >= 2 && now.getMonth() <= 9; // DST applies from March to October
const localOffset = isDST ? 1 : 0; // UTC+1 during DST, UTC+0 otherwise
const localTime = new Date(now.getTime() + localOffset * 60 * 60 * 1000);

const localHours = String(localTime.getUTCHours()).padStart(2, '0');
const localMinutes = String(localTime.getUTCMinutes()).padStart(2, '0');
const localSeconds = String(localTime.getUTCSeconds()).padStart(2, '0');
const localTimeString = `${localHours}:${localMinutes}:${localSeconds}`;
document.getElementById('local-time').textContent = localTimeString;

// Claremorris time
    const isDST = now.getMonth() >= 2 && now.getMonth() <= 9; // DST applies from March to October
    const claremorrisOffset = isDST ? 1 : 0; // UTC+1 during DST, UTC+0 otherwise
    const claremorrisTime = new Date(now.getTime() + claremorrisOffset * 60 * 60 * 1000);
    const claremorrisHours = String(claremorrisTime.getUTCHours()).padStart(2, '0');
    const claremorrisMinutes = String(claremorrisTime.getUTCMinutes()).padStart(2, '0');
    const claremorrisSeconds = String(claremorrisTime.getUTCSeconds()).padStart(2, '0');
    const claremorrisTimeString = `${claremorrisHours}:${claremorrisMinutes}:${claremorrisSeconds}`;
    document.getElementById('claremorris-time').textContent = claremorrisTimeString; // Update the clock
  }
  
  // Update the clocks every second
  setInterval(updateClock, 1000);
  
  // Initialize the clocks
  updateClock();