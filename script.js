function updateClock() {
    const now = new Date();
  
    // Local time (GMT)
    const localHours = String(now.getUTCHours()).padStart(2, '0');
    const localMinutes = String(now.getUTCMinutes()).padStart(2, '0');
    const localSeconds = String(now.getUTCSeconds()).padStart(2, '0');
    const localTimeString = `${localHours}:${localMinutes}:${localSeconds}`;
    document.getElementById('local-time').textContent = localTimeString;
  
    // Sydney time
    const sydneyOffset = 11; // Adjust as needed for DST
    const sydneyTime = new Date(now.getTime() + sydneyOffset * 60 * 60 * 1000);
    const sydneyHours = String(sydneyTime.getUTCHours()).padStart(2, '0');
    const sydneyMinutes = String(sydneyTime.getUTCMinutes()).padStart(2, '0');
    const sydneySeconds = String(sydneyTime.getUTCSeconds()).padStart(2, '0');
    const sydneyTimeString = `${sydneyHours}:${sydneyMinutes}:${sydneySeconds}`;
    document.getElementById('sydney-time').textContent = sydneyTimeString;
  }
  
  // Update the clocks every second
  setInterval(updateClock, 1000);
  
  // Initialize the clocks
  updateClock();  