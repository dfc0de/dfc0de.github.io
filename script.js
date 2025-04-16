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

    // Display "Thinking..." while processing
    outputElement.innerText = "Thinking...";

    setTimeout(() => {
        if (!inputText) {
            outputElement.innerText = "Your translation will appear here.";
            // Hide the "Add a Translation" section if no input
            document.getElementById("add-word-section").style.display = "none";
            return;
        }

        // Remove punctuation like "?", "!", etc., and preserve whole words
        inputText = inputText.toLowerCase().replace(/[?!.,]/g, "").trim();

        // Check if the entire sentence exists in the dictionary first
        if (martianDictionary[inputText]) {
            outputElement.innerText = martianDictionary[inputText];
            // Hide the "Add a Translation" section if the sentence is found
            document.getElementById("add-word-section").style.display = "none";
            return;
        }

        // Split input into individual words
        let words = inputText.split(/\s+/); // Use whitespace to split into whole words
        let translatedWords = [];
        let unknownWords = [];

        words.forEach(word => {
            if (martianDictionary[word]) {
                translatedWords.push(martianDictionary[word]);
            } else if (word) { // Only add valid whole words
                translatedWords.push(`[No translation for '${word}']`);
                unknownWords.push(word);
            }
        });

        // Update the output
        outputElement.innerText = translatedWords.join(" ");

        // Show or hide the "Add a Translation" section based on unknown words
        if (unknownWords.length > 0) {
            document.getElementById("add-word-section").style.display = "block";
            document.getElementById("new-word").value = unknownWords[0]; // Show the first unknown word
        } else {
            document.getElementById("add-word-section").style.display = "none";
        }
    }, 300); // Delay of 300ms
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