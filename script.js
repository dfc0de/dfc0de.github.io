// script.js
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// Load the Universal Sentence Encoder model
let model;
async function loadModel() {
    model = await use.load();
    console.log("Model loaded.");
}
loadModel();

async function sendMessage() {
    const userText = userInput.value;
    if (userText === "") return;

    addMessage("You", userText);

    if (model) {
        const input = await model.embed([userText]);
        const response = generateResponse(input);
        addMessage("Bot", response);
    } else {
        addMessage("Bot", "I'm still loading...");
    }

    userInput.value = "";
}

function addMessage(sender, text) {
    const message = document.createElement("div");
    message.className = sender.toLowerCase() + "-message";
    message.innerText = sender + ": " + text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateResponse(input) {
    // Simple logic for demo purposes
    const responses = [
        "Mars is fascinating, isn't it?",
        "What would you build first on Mars?",
        "Did you know that a day on Mars is just over 24 hours?",
    ];
    const index = Math.floor(Math.random() * responses.length);
    return responses[index];
}