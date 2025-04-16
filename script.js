const martianDictionary = {
    // Basic Words
    "hello": "blorp",
    "friend": "zog",
    "world": "gliff",
    "earth": "vorta",
    "water": "kroth",
    "fire": "flar",
    "sky": "zelth",
    "star": "nexar",
    "love": "vorn",
    "peace": "thrall",
    "danger": "krath",
    "food": "mivox",
    "home": "zarn",
    "yes": "thak",
    "no": "gron",
    "thank": "zorath",
    
    // Common Sentences
    "how are you": "zog blorp?",
    "good morning": "thrall nexar!",
    "good night": "thrall zelth!",
    "where are you from": "Zorn vorta?",
    "I am from Earth": "Trok vorta.",
    "welcome to Mars": "Vex zolth!",
    "I need water": "Trok kroth!",
    "we come in peace": "Zorn thrall!",
    "let’s explore": "Flarn nexar!"
};

function translateText() {
    let inputText = document.getElementById("earth-input").value.trim();
    let outputElement = document.getElementById("martian-output");

    // Display "Thinking..." immediately
    outputElement.innerText = "Thinking...";

    // Add a small delay to simulate processing and allow "Thinking..." to show
    setTimeout(() => {
        if (!inputText) {
            outputElement.innerText = "Your translation will appear here.";
            return;
        }

        // Remove punctuation like "?", "!", etc.
        inputText = inputText.toLowerCase().replace(/[?!.,]/g, "");

        // Check if the entire sentence exists in the dictionary first
        if (martianDictionary[inputText]) {
            outputElement.innerText = martianDictionary[inputText];
            return;
        }

        // Otherwise, translate word by word
        let words = inputText.split(" ");
        let translatedWords = words.map(word => martianDictionary[word] || `[No translation for '${word}']`);

        // Update the output after processing
        outputElement.innerText = translatedWords.join(" ");
    }, 300); // 300 milliseconds delay
}