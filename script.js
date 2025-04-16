const martianDictionary = {
    "hello": "blorp",
    "friend": "zog",
    "world": "gliff",
    "earth": "vorta"
};

function translateText() {
    let inputText = document.getElementById("earth-input").value.trim(); // Get input

    if (inputText === "") {
        document.getElementById("martian-output").innerText = "Please enter text!";
        return;
    }

    let words = inputText.split(" ");
    let translatedWords = words.map(word => {
        return martianDictionary[word.toLowerCase()] || `[ERROR: No translation for '${word}']`;
    });

    let translatedText = translatedWords.join(" ");
    document.getElementById("martian-output").innerText = translatedText; // Update output
}