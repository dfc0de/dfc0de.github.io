function updateClock() {
    const now = new Date();
  
    // Local time
    const localHours = String(now.getHours()).padStart(2, '0');
    const localMinutes = String(now.getMinutes()).padStart(2, '0');
    const localSeconds = String(now.getSeconds()).padStart(2, '0');
    const localTimeString = `${localHours}:${localMinutes}:${localSeconds}`;
    document.getElementById('local-time').textContent = localTimeString;
  
    // Sydney time
    const sydneyOffset = 11; // Sydney is GMT+11 during standard time
    const sydneyTime = new Date(now.getTime() + sydneyOffset * 60 * 60 * 1000); // Add offset
    const sydneyHours = String(sydneyTime.getUTCHours()).padStart(2, '0');
    const sydneyMinutes = String(sydneyTime.getMinutes()).padStart(2, '0');
    const sydneySeconds = String(sydneyTime.getSeconds()).padStart(2, '0');
    const sydneyTimeString = `${sydneyHours}:${sydneyMinutes}:${sydneySeconds}`;
    document.getElementById('sydney-time').textContent = sydneyTimeString;
  }
  
  // Update the clocks every second
  setInterval(updateClock, 1000);
  
  // Initialize the clocks
  updateClock();  