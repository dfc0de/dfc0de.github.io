// Show Modal on button click
document.getElementById("open-modal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "block"; // Show modal
});

// Close Modal on close button click
document.querySelector(".close-button").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none"; // Hide modal
});

// Submit Ticket Form
document.getElementById("ticket-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const title = document.getElementById("ticket-title").value;
    const description = document.getElementById("ticket-description").value;
    const priority = document.getElementById("priority").value;

    // Create ticket entry
    const ticketList = document.getElementById("ticket-list");
    const ticketEntry = document.createElement("div");
    ticketEntry.className = "ticket-entry";

    ticketEntry.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <span>Priority: ${priority} | Submitted on: ${new Date().toLocaleString()}</span>
    `;

    // Append to ticket list
    ticketList.appendChild(ticketEntry);

    // Reset and close the modal
    alert("Ticket created successfully!");
    document.getElementById("modal").style.display = "none"; // Close the modal
    this.reset(); // Reset the form
});