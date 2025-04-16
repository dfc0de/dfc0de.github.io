const martianDictionary = {
    "hello": "blorp",
    "friend": "zog",
    "world": "gliff",
    "earth": "vorta"
};

function translateToMartian(englishText) {
    return englishText.split(" ").map(word => martianDictionary[word.toLowerCase()] || word).join(" ");
}

console.log(translateToMartian("hello friend")); // Output: "blorp zog"