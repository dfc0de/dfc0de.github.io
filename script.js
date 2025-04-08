function updateClock() {
    const now = new Date();
  
    // Get current hours, minutes, and seconds
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    // Calculate rotation for each hand
    const hoursRotation = (hours % 12) * 30 + minutes * 0.5; // 30 degrees per hour + adjustment for minutes
    const minutesRotation = minutes * 6; // 6 degrees per minute
    const secondsRotation = seconds * 6; // 6 degrees per second
  
    // Rotate the clock hands
    document.querySelector('.hour-hand').style.transform = `translateX(-50%) rotate(${hoursRotation + 90}deg)`;
    document.querySelector('.minute-hand').style.transform = `translateX(-50%) rotate(${minutesRotation + 90}deg)`;
    document.querySelector('.second-hand').style.transform = `translateX(-50%) rotate(${secondsRotation + 90}deg)`;
  }
  
  // Initialize and update the clock every second
  updateClock();
  setInterval(updateClock, 1000);  