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
    if (!inputText) {
        document.getElementById("martian-output").innerText = "Please enter text!";
        return;
    }

    let words = inputText.toLowerCase().split(" ");
    let translatedWords = words.map(word => {
        if (martianDictionary[word]) {
            return martianDictionary[word]; 
        } else {
            let newWord = prompt(`No Martian translation for '${word}'. Add one?`);
            if (newWord) martianDictionary[word] = newWord;
            return newWord ? newWord : `[ERROR: No translation for '${word}']`;
        }
    });

    document.getElementById("martian-output").innerText = translatedWords.join(" ");
}