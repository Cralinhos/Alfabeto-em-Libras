// Array de desafios: cada objeto do array "challenges" representa um desafio com uma palavra e uma imagem correspondente.
// "word" é um array de letras que representa a palavra correta para o desafio, e "image" é o caminho para a imagem associada ao desafio.
const challenges = [
  { word: ["C", "A", "S", "A"], image: "img/img-casa.png" },
  { word: ["G", "A", "T", "O"], image: "img/Gato.png" },
  { word: ["C", "A", "R", "R", "O"], image: "img/carro.png" },
  { word: ["P", "A", "T", "O"], image: "img/pato.png" },
];

// Define o índice do desafio atual, lista de letras selecionadas pelo usuário e quantidade de vidas.
let currentChallengeIndex = 0;
let selectedLetters = [];
let lives = 3;

// Elementos de referência no DOM
const constructedPhraseDiv = document.getElementById("constructed-phrase"); // Elemento onde a frase montada é exibida.
const challengeImage = document.getElementById("challenge-image"); // Elemento da imagem do desafio.
const livesCount = document.getElementById("lives-count"); // Elemento para exibir o número de vidas.

// Função para carregar o desafio atual com base no índice "currentChallengeIndex".
function loadChallenge() {
  const challenge = challenges[currentChallengeIndex];
  challengeImage.src = challenge.image; // Atualiza a imagem do desafio.
  selectedLetters = []; // Reinicia as letras selecionadas para o novo desafio.
  constructedPhraseDiv.innerHTML = ""; // Limpa a frase montada do desafio anterior.
}

// Adiciona evento de clique em cada elemento de letra. 
// Quando uma letra é clicada, ela é adicionada à lista "selectedLetters" e exibida no "constructedPhraseDiv".
document.querySelectorAll(".letter").forEach((letterElement) => {
  letterElement.addEventListener("click", () => {
    const letter = letterElement.getAttribute("data-letter"); // Obtém a letra do atributo "data-letter".
    selectedLetters.push(letter); // Adiciona a letra à lista de letras selecionadas.
    constructedPhraseDiv.innerHTML = selectedLetters.join(" "); // Exibe as letras selecionadas separadas por espaços.
  });
});

// Função para avançar para o próximo desafio.
// Verifica se há mais desafios no array. Se sim, carrega o próximo desafio; se não, exibe uma mensagem de conclusão.
function nextChallenge() {
  if (currentChallengeIndex < challenges.length - 1) {
    currentChallengeIndex++; // Incrementa o índice para o próximo desafio.
    loadChallenge(); // Carrega o novo desafio.
  } else {
    // Mensagem de conclusão ao usuário e recarrega a página após 3 segundos.
    showMessage("Você completou todos os desafios! Parabéns!", "success");
    setTimeout(() => {
      location.reload(); // Recarrega a página.
    }, 3000);
  }
}

// Função para reiniciar o jogo.
// Redefine as vidas, índice do desafio e atualiza a contagem de vidas e o desafio inicial.
function resetGame() {
  lives = 3; // Reinicia as vidas.
  currentChallengeIndex = 0; // Reseta o índice do desafio para o primeiro.
  livesCount.textContent = lives; // Atualiza a exibição de vidas no DOM.
  updateHearts(); // Atualiza a exibição dos corações (vidas).
  loadChallenge(); // Carrega o primeiro desafio.
}

// Função para comparar duas arrays, usada para verificar se a palavra montada está correta.
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false; // Retorna falso se as arrays tiverem tamanhos diferentes.
  return arr1.every((val, index) => val === arr2[index]); // Verifica se todos os elementos são iguais.
}

// Elementos para exibir mensagens e a quantidade de vidas no DOM.
const messageBox = document.getElementById("message-box");
const heartsContainer = document.getElementById("hearts-container");

// Verifica se a palavra montada pelo usuário está correta ao clicar no botão de verificação.
// Caso esteja correta, avança para o próximo desafio; caso contrário, decrementa uma vida.
document.getElementById("check-word").addEventListener("click", () => {
  const currentWord = challenges[currentChallengeIndex].word; // Palavra correta do desafio atual.
  if (arraysEqual(selectedLetters, currentWord)) {
    // Mensagem de sucesso ao acertar a palavra.
    showMessage("Parabéns! Você acertou.", "success");
    nextChallenge(); // Avança para o próximo desafio.
    shuffleLetters(); // Embaralha as letras novamente.
  } else {
    // Reduz uma vida e atualiza a exibição das vidas.
    lives--; 
    console.log(`Vidas restantes: ${lives}`); // Log para depuração.
    updateHearts(); // Atualiza a exibição das vidas.
    shuffleLetters(); // Embaralha as letras novamente.
    selectedLetters = []; // Limpa as letras selecionadas.
    constructedPhraseDiv.innerHTML = ""; // Limpa a frase montada.
    if (lives === 0) {
      // Exibe mensagem de fim de jogo e recarrega a página após 3 segundos.
      showMessage("Game Over! Você perdeu todas as vidas.", "error");
      setTimeout(() => {
        location.reload(); // Recarrega a página.
      }, 3000);
    } else {
      // Exibe mensagem de erro ao usuário.
      showMessage("Resposta errada! Tente novamente.", "error");
    }
  }
});

// Função para atualizar a exibição das vidas (corações).
function updateHearts() {
  const hearts = heartsContainer.querySelectorAll(".coracao"); // Seleciona os elementos de coração.
  hearts.forEach((heart, index) => {
    // Mostra ou esconde o coração dependendo do número de vidas restantes.
    heart.style.display = index < lives ? "inline" : "none";
  });
}

// Função para exibir mensagens ao usuário. A cor de fundo e do texto mudam dependendo do tipo de mensagem.
function showMessage(message, type) {
  messageBox.textContent = message; // Define o texto da mensagem.
  messageBox.classList.remove("hidden"); // Exibe a mensagem.
  messageBox.style.backgroundColor = type === "success" ? "#d4edda" : "#f8d7da"; // Cor de fundo (verde para sucesso, vermelho para erro).
  messageBox.style.color = type === "success" ? "#155724" : "#721c24"; // Cor do texto.
  setTimeout(() => {
    messageBox.classList.add("hidden"); // Esconde a mensagem após 3 segundos.
  }, 5000);
}

// Função para embaralhar um array usando o algoritmo de Fisher-Yates.
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Índice aleatório.
    [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos.
  }
  return array;
}

// Função para embaralhar as letras exibidas na página.
function shuffleLetters() {
  const alphabet = document.querySelector(".alphabet");
  const letters = Array.from(alphabet.children); // Converte HTMLCollection em Array.

  // Embaralha as letras e remove do DOM para reordenar.
  const shuffledLetters = shuffleArray(letters);
  alphabet.innerHTML = ""; // Limpa o elemento.

  // Adiciona as letras embaralhadas de volta ao DOM.
  shuffledLetters.forEach((letter) => alphabet.appendChild(letter));
}

// Chama a função de embaralhamento ao carregar a página.
window.onload = shuffleLetters;

// Carrega o primeiro desafio ao iniciar o jogo.
loadChallenge();
