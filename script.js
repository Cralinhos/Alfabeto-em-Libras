const constructedPhrase = document.getElementById('constructed-phrase');
const clearButton = document.getElementById('clear-btn');
const letters = document.querySelectorAll('.letter');

letters.forEach(letter => {
    letter.addEventListener('click', () => {
        const selectedLetter = letter.getAttribute('data-letter');
        constructedPhrase.innerHTML += selectedLetter;
    });
});

clearButton.addEventListener('click', () => {
    constructedPhrase.innerHTML = '';
});

document.addEventListener('DOMContentLoaded', () => {
    const clearLetterButton = document.getElementById('clear-letra');
    const constructedPhraseDiv = document.getElementById('constructed-phrase');
    clearLetterButton.addEventListener('click', () => {
        let currentPhrase = constructedPhraseDiv.textContent;
        if (currentPhrase.length > 0) {
            currentPhrase = currentPhrase.slice(0, -1);
            constructedPhraseDiv.textContent = currentPhrase;
        }
    });
});

document.getElementById("espaco-letra").addEventListener("click", function() {
    let fraseAtual = constructedPhrase.textContent;
    constructedPhrase.innerHTML = fraseAtual + " ";
});


