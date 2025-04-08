function updateClock() {
    const now = new Date();
  
    // Get current hours, minutes, and seconds
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    // Calculate rotation for each hand
    const hoursRotation = (hours % 12) * 30 + minutes * 0.5; // 30 degrees per hour + minute adjustment
    const minutesRotation = minutes * 6; // 6 degrees per minute
    const secondsRotation = seconds * 6; // 6 degrees per second
  
    // Apply rotation to clock hands
    document.querySelector('.hour-hand').style.transform = `rotate(${hoursRotation}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${minutesRotation}deg)`;
    document.querySelector('.second-hand').style.transform = `rotate(${secondsRotation}deg)`;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initialize the clock
  updateClock();  