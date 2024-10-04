const letters = [
    { letter: 'A', image: 'Alfabeto Quebra Cabeça/A.png' },
    { letter: 'B', image: 'Alfabeto Quebra Cabeça/B.png' },
    { letter: 'C', image: 'Alfabeto Quebra Cabeça/C.png' },
    { letter: 'D', image: 'Alfabeto Quebra Cabeça/D.png' },
    { letter: 'E', image: 'Alfabeto Quebra Cabeça/E.png' },
    { letter: 'F', image: 'Alfabeto Quebra Cabeça/F.png' },
    { letter: 'G', image: 'Alfabeto Quebra Cabeça/G.png' },
    { letter: 'H', image: 'Alfabeto Quebra Cabeça/H.png' },
    { letter: 'I', image: 'Alfabeto Quebra Cabeça/I.png' },
    { letter: 'J', image: 'Alfabeto Quebra Cabeça/J.png' },
    { letter: 'K', image: 'Alfabeto Quebra Cabeça/K.png' },
    { letter: 'L', image: 'Alfabeto Quebra Cabeça/L.png' },
    { letter: 'M', image: 'Alfabeto Quebra Cabeça/M.png' },
    { letter: 'N', image: 'Alfabeto Quebra Cabeça/N.png' },
    { letter: 'O', image: 'Alfabeto Quebra Cabeça/O.png' },
    { letter: 'P', image: 'Alfabeto Quebra Cabeça/P.png' },
    { letter: 'Q', image: 'Alfabeto Quebra Cabeça/Q.png' },
    { letter: 'R', image: 'Alfabeto Quebra Cabeça/R.png' },
    { letter: 'S', image: 'Alfabeto Quebra Cabeça/S.png' },
    { letter: 'T', image: 'Alfabeto Quebra Cabeça/T.png' },
    { letter: 'U', image: 'Alfabeto Quebra Cabeça/U.png' },
    { letter: 'V', image: 'Alfabeto Quebra Cabeça/V.png' },
    { letter: 'W', image: 'Alfabeto Quebra Cabeça/W.png' },
    { letter: 'X', image: 'Alfabeto Quebra Cabeça/X.png' },
    { letter: 'Y', image: 'Alfabeto Quebra Cabeça/Y.png' },
    { letter: 'Z', image: 'Alfabeto Quebra Cabeça/Z.png' },
    { letter: 'Ç', image: 'Alfabeto Quebra Cabeça/Ç.png' }
];

let score = 0;
let currentLetter;

const scoreDisplay = document.getElementById('score');
const currentLetterImg = document.getElementById('current-letter');
const optionsContainer = document.querySelector('.options');
const nextButton = document.getElementById('next-btn');

function getRandomLetter() {
    return letters[Math.floor(Math.random() * letters.length)];
}

function displayLetter() {
    currentLetter = getRandomLetter();
    currentLetterImg.src = currentLetter.image;
    optionsContainer.innerHTML = '';

    const options = [currentLetter.letter];
    while (options.length < 4) {
        const randomLetter = getRandomLetter().letter;
        if (!options.includes(randomLetter)) {
            options.push(randomLetter);
        }
    }
    
    options.sort(() => Math.random() - 0.5); // Embaralha as opções

    options.forEach(letter => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        optionDiv.textContent = letter;
        optionDiv.onclick = () => checkAnswer(letter);
        optionsContainer.appendChild(optionDiv);
    });
}

function checkAnswer(selectedLetter) {
    if (selectedLetter === currentLetter.letter) {
        score++;
        scoreDisplay.textContent = score;
        alert('Correto!');

        // Avança para a próxima letra automaticamente
        displayLetter();
    } else {
        alert('Errado!');
        removeWrongOption(selectedLetter);
    }
}

function removeWrongOption(wrongLetter) {
    const optionDivs = optionsContainer.querySelectorAll('.option');
    optionDivs.forEach(option => {
        if (option.textContent !== currentLetter.letter && option.textContent === wrongLetter) {
            option.remove(); // Remove a opção errada
        }
    });

    // Se sobrar apenas uma opção, essa é a correta
    const remainingOptions = optionsContainer.querySelectorAll('.option');
    if (remainingOptions.length === 1) {
        alert('A única opção restante é a correta: ' + remainingOptions[0].textContent);
        checkAnswer(remainingOptions[0].textContent); // Chama a função de verificação
    }
}

const messagePanel = document.getElementById('message-panel');

function showMessage(text, isCorrect) {
    messagePanel.textContent = text;
    messagePanel.style.backgroundColor = isCorrect ? '#4ad0a0' : '#e74c3c'; // Verde para correto, vermelho para errado
    messagePanel.style.display = 'block';
    messagePanel.style.opacity = '1';

    // Esconde a mensagem após 2 segundos
    setTimeout(() => {
        messagePanel.style.opacity = '0';
        setTimeout(() => {
            messagePanel.style.display = 'none';
        }, 500); // Tempo para o fade out
    }, 2000);
}

function checkAnswer(selectedLetter) {
    if (selectedLetter === currentLetter.letter) {
        score++;
        scoreDisplay.textContent = score;
        showMessage('Correto!', true);

        // Avança para a próxima letra automaticamente
        setTimeout(displayLetter, 2000); // Espera um pouco antes de avançar
    } else {
        showMessage('Errado! Tente novamente.', false);
        removeWrongOption(selectedLetter);
    }
}


// Inicia o jogo
displayLetter();
