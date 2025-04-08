// script.js
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
    this.reset(); // Reset the form
});