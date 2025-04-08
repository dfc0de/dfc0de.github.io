function createClockNumbers() {
    const clock = document.querySelector('.clock');
  
    for (let i = 1; i <= 12; i++) {
      const number = document.createElement('div');
      number.classList.add('number');
      number.textContent = i;
  
      // Calculate position for the numbers
      const angle = (i * 30) * (Math.PI / 180); // Convert degrees to radians
      const radius = clock.offsetWidth / 2 - 20; // Distance from center
      const x = Math.cos(angle) * radius + clock.offsetWidth / 2;
      const y = Math.sin(angle) * radius + clock.offsetHeight / 2;
  
      number.style.left = `${x}px`;
      number.style.top = `${y}px`;
      number.style.transform = `translate(-50%, -50%)`;
  
      clock.appendChild(number);
    }
  }
  
  // Call the function to add numbers to the clock
  createClockNumbers();