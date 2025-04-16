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
    let inputText = document.getElementById("earth-input").value.trim(); // Get user input

    if (inputText === "") {
        document.getElementById("martian-output").innerText = "Please enter text!";
        return;
    }

    let words = inputText.toLowerCase().split(" ");
    let translatedWords = words.map(word => {
        return martianDictionary[word] || `[ERROR: No translation for '${word}']`;
    });

    let translatedText = translatedWords.join(" ");
    document.getElementById("martian-output").innerText = translatedText; // Update output
}