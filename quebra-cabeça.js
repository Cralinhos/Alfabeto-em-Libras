// Array de desafios: cada desafio tem uma palavra e a imagem correspondente
const challenges = [
    { word: ['C', 'A', 'S', 'A'], image: 'img-casa.png' },
    { word: ['G', 'A', 'T', 'O'], image: 'GATO.png'},
    { word: ['C', 'A', 'R', 'R', 'O'], image: 'carro.png' },
    { word: ['P', 'A', 'T', 'O'], image: 'pato.jpg' }
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

// Limpar frase
document.getElementById('clear-btn').addEventListener('click', () => {
    selectedLetters = [];
    constructedPhraseDiv.innerHTML = '';
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
    } else {
        lives--; // Reduz a vida
        console.log(`Vidas restantes: ${lives}`); // Para debug
        updateHearts(); // Atualiza a exibição das vidas
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
    }, 500);
}

// Função para mostrar o tutorial ao carregar a página
window.onload = function() {
    const tutorial = document.getElementById('tutorial');
    tutorial.classList.remove('hidden'); // Remove a classe 'hidden' para mostrar o tutorial
};

// Função para fechar o tutorial
document.getElementById('close-tutorial').onclick = function() {
    const tutorial = document.getElementById('tutorial');
    tutorial.classList.add('hidden');
};


// Carregar o primeiro desafio ao iniciar o jogo
loadChallenge();