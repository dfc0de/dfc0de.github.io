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
    "you": "ogg",
    "how": "zod",
    "you": "blorp",
    "are": "uggra",
    
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

const marsAlphabet = {
    "a": "marsaa",
    "b": "marsab",
    "c": "marsac",
    "d": "marsad",
    "e": "marsae",
    "f": "marsaf",
    "g": "marsag",
    "h": "marsah",
    "i": "marsai",
    "j": "marsaj",
    "k": "marsak",
    "l": "marsal",
    "m": "marsam",
    "n": "marsan",
    "o": "marsao",
    "p": "marsap",
    "q": "marsaq",
    "r": "marsar",
    "s": "marsas",
    "t": "marsat",
    "u": "marsau",
    "v": "marsav",
    "w": "marsaw",
    "x": "marsax",
    "y": "marsay",
    "z": "marsaz"
};

function translateToMarsAlphabet() {
    let inputText = document.getElementById("earth-input").value.trim().toLowerCase();
    let outputElement = document.getElementById("martian-output");

    // Display "Thinking..." while processing
    outputElement.innerText = "Thinking...";

    setTimeout(() => {
        if (!inputText) {
            outputElement.innerText = "Your translation will appear here.";
            return;
        }

        // Translate letter by letter
        let translatedLetters = inputText.split("").map(letter => {
            return marsAlphabet[letter] || letter; // Use the Mars alphabet or keep original if not found
        });

        // Update the output
        outputElement.innerText = translatedLetters.join(" ");
    }, 300); // Delay for user experience
}

function translateText() {
    let inputText = document.getElementById("earth-input").value.trim();
    let outputElement = document.getElementById("martian-output");

    // Display "Thinking..." while processing
    outputElement.innerText = "Thinking...";

    setTimeout(() => {
        if (!inputText) {
            outputElement.innerText = "Your translation will appear here.";
            document.getElementById("add-word-section").style.display = "none"; // Hide translation addition section
            return;
        }

        // Remove punctuation and trim spaces
        inputText = inputText.toLowerCase().replace(/[?!.,]/g, "").trim();

        // Split input into tokens (words or letters)
        let tokens = inputText.split(/\s+/); // Use whitespace to split into tokens
        let translatedTokens = [];
        let unknownWords = [];

        tokens.forEach(token => {
            if (token.length === 1 && marsAlphabet[token]) {
                // If it's a single letter, use the Mars Alphabet
                translatedTokens.push(marsAlphabet[token]);
            } else if (martianDictionary[token]) {
                // If it's a word, use the Martian Dictionary
                translatedTokens.push(martianDictionary[token]);
            } else if (token) {
                // Unknown token
                translatedTokens.push(`[No translation for '${token}']`);
                unknownWords.push(token);
            }
        });

        // Update the output
        outputElement.innerText = translatedTokens.join(" ");

        // Show "Add a Translation" section only for unknown words
        if (unknownWords.length > 0) {
            document.getElementById("add-word-section").style.display = "block";
            document.getElementById("new-word").value = unknownWords[0];
        } else {
            document.getElementById("add-word-section").style.display = "none";
        }
    }, 300); // Delay for user experience
}

function addTranslation() {
    let newWord = document.getElementById("new-word").value.trim();
    let martianTranslation = document.getElementById("martian-translation").value.trim();

    if (newWord && martianTranslation) {
        // Add the new word and its translation to the dictionary
        martianDictionary[newWord] = martianTranslation;

        // Clear the input fields
        document.getElementById("new-word").value = "";
        document.getElementById("martian-translation").value = "";

        // Hide the "Add a Translation" section
        document.getElementById("add-word-section").style.display = "none";

        // Display the confirmation message
        alert(`Translation added for "${newWord}" as "${martianTranslation}" (pending approval).`);
    } else {
        alert("Please enter a valid translation!");
    }
}