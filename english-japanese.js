document.getElementById('input').addEventListener('input', function() {
    const inputText = this.value;
    const translatedText = translateToJapanese(inputText);
    document.getElementById('output').textContent = translatedText;
});

function translateToJapanese(text) {
    const translations = {
        'A': 'エー',
        'B': 'ビー',
        'C': 'シー',
        // Add more translations as needed
    };
    return translations[text.toUpperCase()] || 'Translation not available';
}