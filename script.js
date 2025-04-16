function getMarsTime() {
    const earthNow = new Date();
    
    // Convert Earth time to Mars time (approximate)
    const marsSeconds = earthNow.getTime() / 1000 * 1.02749125;
    const marsDate = new Date(marsSeconds * 1000);
    
    // Format the Mars time
    const marsTimeString = marsDate.toUTCString().replace("GMT", "MTC (Mars Time)");

    document.getElementById("mars-time").innerText = marsTimeString;
}

// Update Mars time every second
setInterval(getMarsTime, 1000);

// Initialize the Mars time on page load
getMarsTime();