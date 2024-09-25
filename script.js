// Obtém elementos principais
const constructedPhrase = document.getElementById('constructed-phrase');
const clearButton = document.getElementById('clear-btn');
const letters = document.querySelectorAll('.letter');

// Função para adicionar letras à frase
letters.forEach(letter => {
    letter.addEventListener('click', () => {
        const selectedLetter = letter.getAttribute('data-letter');
        constructedPhrase.innerHTML += selectedLetter;
    });
});

// Função para limpar a frase
clearButton.addEventListener('click', () => {
    constructedPhrase.innerHTML = '';
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const clearLetterButton = document.getElementById('clear-letra');
    const constructedPhraseDiv = document.getElementById('constructed-phrase');

    clearLetterButton.addEventListener('click', () => {
        // Obtém o texto atual da frase construída
        let currentPhrase = constructedPhraseDiv.textContent;

        // Remove a última letra da frase
        if (currentPhrase.length > 0) {
            currentPhrase = currentPhrase.slice(0, -1); // Remove a última letra
            constructedPhraseDiv.textContent = currentPhrase; // Atualiza a frase
        }
    });
});

