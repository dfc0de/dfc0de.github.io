function updateClock() {
    const now = new Date();
  
    const hours = String(now.getHours()).padStart(2, '0'); // Pad single digits with 0
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    // Format the time as HH:MM:SS
    const timeString = `${hours}:${minutes}:${seconds}`;
  
    // Update the clock display
    document.getElementById('time').textContent = timeString;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initialize the clock display
  updateClock();  