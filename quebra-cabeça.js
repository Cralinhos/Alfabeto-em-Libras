// Array de desafios: cada desafio tem uma palavra e a imagem correspondente
const challenges = [
    { word: ['C', 'A', 'S', 'A'], image: 'img/img-casa.png' },
    { word: ['G', 'A', 'T', 'O'], image: 'img/Gato.png'},
    { word: ['C', 'A', 'R', 'R', 'O'], image: 'img/carro.png' },
    { word: ['P', 'A', 'T', 'O'], image: 'img/pato.png' }
];

let currentChallengeIndex = 0;
let selectedLetters = [];
let lives = 3;

const constructedPhraseDiv = document.getElementById('constructed-phrase');
const challengeImage = document.getElementById('challenge-image');
const livesCount = document.getElementById('lives-count');

// Função para carregar o desafio atual
function loadChallenge() {
    const challenge = challenges[currentChallengeIndex];
    challengeImage.src = challenge.image;
    selectedLetters = [];
    constructedPhraseDiv.innerHTML = '';
}

// Evento de clique nas letras
document.querySelectorAll('.letter').forEach(letterElement => {
    letterElement.addEventListener('click', () => {
        const letter = letterElement.getAttribute('data-letter');
        selectedLetters.push(letter);
        constructedPhraseDiv.innerHTML = selectedLetters.join(' ');
    });
});



// Próximo desafio
function nextChallenge() {
    if (currentChallengeIndex < challenges.length - 1) {
        currentChallengeIndex++;
        loadChallenge();
    } else {
        // Se todos os desafios foram completados, recarregue a página
        showMessage('Você completou todos os desafios! Parabéns!', 'success');
        setTimeout(() => {
            location.reload(); // Recarrega a página após 3 segundos
        }, 3000);
    }
}


// Reiniciar jogo
function resetGame() {
    lives = 3; // Resetando as vidas
    currentChallengeIndex = 0; // Voltando para o primeiro desafio
    livesCount.textContent = lives; // Atualizando a contagem de vidas
    updateHearts(); // Atualiza a exibição das vidas
    loadChallenge(); // Carregando o primeiro desafio
}

// Função para comparar duas arrays
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((val, index) => val === arr2[index]);
}

const messageBox = document.getElementById('message-box');
const heartsContainer = document.getElementById('hearts-container');

document.getElementById('check-word').addEventListener('click', () => {
    const currentWord = challenges[currentChallengeIndex].word;
    if (arraysEqual(selectedLetters, currentWord)) {
        showMessage('Parabéns! Você acertou.', 'success');
        nextChallenge();
        shuffleLetters();
    } else {
        lives--; // Reduz a vida
        console.log(`Vidas restantes: ${lives}`); // Para debug
        updateHearts(); // Atualiza a exibição das vidas
        shuffleLetters();
        selectedLetters = []; // Limpa as letras selecionadas
        constructedPhraseDiv.innerHTML = ''; // Limpa a frase construída
        if (lives === 0) {
            showMessage('Game Over! Você perdeu todas as vidas.', 'error');
            setTimeout(() => {
                location.reload(); // Recarrega a página após 3 segundos
            }, 3000); // Aqui você recarrega a página
        } else {
            showMessage('Resposta errada! Tente novamente.', 'error');
        }
    }
});

// Função para atualizar a exibição das vidas
function updateHearts() {
    const hearts = heartsContainer.querySelectorAll('.coracao');
    hearts.forEach((heart, index) => {
        heart.style.display = index < lives ? 'inline' : 'none'; // Mostra ou esconde o coração
    });
}

// Função para exibir a mensagem
function showMessage(message, type) {
    messageBox.textContent = message;
    messageBox.classList.remove('hidden');
    messageBox.style.backgroundColor = type === 'success' ? '#d4edda' : '#f8d7da'; // Cor de fundo
    messageBox.style.color = type === 'success' ? '#155724' : '#721c24'; // Cor do texto
    setTimeout(() => {
        messageBox.classList.add('hidden'); // Esconde a mensagem após 3 segundos
    }, 5000);
}

// Função para embaralhar um array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Função para embaralhar as letras na página
function shuffleLetters() {
    const alphabet = document.querySelector('.alphabet');
    const letters = Array.from(alphabet.children); // Converte HTMLCollection em Array

    // Embaralha as letras
    const shuffledLetters = shuffleArray(letters);

    // Remove letras do DOM
    alphabet.innerHTML = '';

    // Adiciona as letras embaralhadas de volta ao DOM
    shuffledLetters.forEach(letter => alphabet.appendChild(letter));
}

// Chama a função de embaralhamento ao carregar a página
window.onload = shuffleLetters;


// Carregar o primeiro desafio ao iniciar o jogo
loadChallenge();
