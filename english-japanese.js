document.getElementById('input').addEventListener('input', function() {
    var inputText = this.value;
    var translatedText = translateToJapanese(inputText);
    document.getElementById('output').textContent = translatedText;
});

function translateToJapanese(text) {
    var translations = {
        'A': 'エー',
        'B': 'ビー',
        'C': 'シー',
        // Add more translations as needed
    };
    return translations[text.toUpperCase()] || 'Translation not available';
}