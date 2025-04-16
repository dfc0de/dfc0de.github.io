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

    let translatedText = inputText.split(" ").map(word => martianDictionary[word.toLowerCase()] || word).join(" ");

    document.getElementById("martian-output").innerText = translatedText; // Update output
}