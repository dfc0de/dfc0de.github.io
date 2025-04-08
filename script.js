// script.js
// Open Modal
document.getElementById("open-modal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "block"; // Show the modal
});

// Close Modal
document.querySelector(".close-button").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none"; // Hide the modal
});

// Submit Ticket Form
document.getElementById("ticket-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const title = document.getElementById("ticket-title").value;
    const description = document.getElementById("ticket-description").value;
    const priority = document.getElementById("priority").value;

    const ticket = {
        title: title,
        description: description,
        priority: priority,
        createdAt: new Date().toLocaleString()
    };

    console.log("New Ticket Created:", ticket);
    alert("Ticket created successfully!");
    document.getElementById("modal").style.display = "none"; // Close the modal
    this.reset(); // Reset the form
});