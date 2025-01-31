const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// Load the toxicity model
let model;
toxicity.load(0.9).then(loadedModel => {
    model = loadedModel;
});

async function sendMessage() {
    const userText = userInput.value;
    if (userText === "") return;

    addMessage("You", userText);

    if (model) {
        const predictions = await model.classify([userText]);
        const toxic = predictions.some(prediction => prediction.results[0].match);

        const botResponse = toxic ? "Let's keep our conversation positive!" : "That's an interesting point about Mars!";
        addMessage("Bot", botResponse);
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