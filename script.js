// script.js
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function sendMessage() {
    const userText = userInput.value;
    if (userText === "") return;

    addMessage("You", userText);

    // Your AI chatbot logic here
    const botResponse = getBotResponse(userText);
    addMessage("Bot", botResponse);

    userInput.value = "";
}

function addMessage(sender, text) {
    const message = document.createElement("div");
    message.className = sender.toLowerCase() + "-message";
    message.innerText = sender + ": " + text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    // Simple responses for demonstration
    if (input.toLowerCase().includes("mars")) {
        return "Mars is fascinating, isn't it?";
    } else {
        return "I'm here to help with your Mars journey!";
    }
}