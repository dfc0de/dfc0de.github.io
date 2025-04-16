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

const marsNumbers = {
    // Numeric Digits
    "1": "oneza",
    "2": "twoza",
    "3": "threeza",
    "4": "fourza",
    "5": "fiveza",
    "6": "sixza",
    "7": "sevenza",
    "8": "eightza",
    "9": "nineza",
    "0": "zeroza",
    
    // Word Equivalents
    "one": "oneza",
    "two": "twoza",
    "three": "threeza",
    "four": "fourza",
    "five": "fiveza",
    "six": "sixza",
    "seven": "sevenza",
    "eight": "eightza",
    "nine": "nineza",
    "zero": "zeroza"
};

function translateNumbers() {
    let inputText = document.getElementById("earth-input").value.trim().toLowerCase();
    let outputElement = document.getElementById("martian-output");

    // Display "Thinking..." while processing
    outputElement.innerText = "Thinking...";

    setTimeout(() => {
        if (!inputText) {
            outputElement.innerText = "Your translation will appear here.";
            return;
        }

        // Split input into tokens (digits or words)
        let tokens = inputText.split(/\s+/); // Split by spaces
        let translatedTokens = tokens.map(token => {
            return marsNumbers[token] || `[No translation for '${token}']`; // Translate numbers and words
        });

        // Update the output
        outputElement.innerText = translatedTokens.join(" ");
    }, 300); // Delay for user experience
}

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

        // Split input into tokens (letters, numbers, or words)
        let tokens = inputText.split(/\s+/);
        let translatedTokens = [];
        let unknownTokens = [];

        tokens.forEach(token => {
            if (marsNumbers[token]) {
                // Translate numeric digits or number words using marsNumbers
                translatedTokens.push(marsNumbers[token]);
            } else if (martianDictionary[token]) {
                // Translate words or sentences using martianDictionary
                translatedTokens.push(martianDictionary[token]);
            } else if (token.length === 1 && marsAlphabet[token]) {
                // Translate individual letters using marsAlphabet
                translatedTokens.push(marsAlphabet[token]);
            } else if (token) {
                // Unknown token
                translatedTokens.push(`[No translation for '${token}']`);
                unknownTokens.push(token);
            }
        });

        // Update the output
        outputElement.innerText = translatedTokens.join(" ");

        // Show "Add a Translation" section only for unknown tokens
        if (unknownTokens.length > 0) {
            document.getElementById("add-word-section").style.display = "block";
            document.getElementById("new-word").value = unknownTokens[0];
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