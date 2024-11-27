// Array "letters" contendo objetos, onde cada objeto representa uma letra do alfabeto com a imagem correspondente.
// Cada objeto possui a propriedade "letter" (a letra) e "image" (o caminho para a imagem associada).

const letters = [
  { letter: "A", image: "../Alfabeto Quebra Cabeça/A.png" },
  { letter: "B", image: "../Alfabeto Quebra Cabeça/B.png" },
  { letter: "C", image: "../Alfabeto Quebra Cabeça/C.png" },
  { letter: "D", image: "../Alfabeto Quebra Cabeça/D.png" },
  { letter: "E", image: "../Alfabeto Quebra Cabeça/E.png" },
  { letter: "F", image: "../Alfabeto Quebra Cabeça/F.png" },
  { letter: "G", image: "../Alfabeto Quebra Cabeça/G.png" },
  { letter: "H", image: "../Alfabeto Quebra Cabeça/H.png" },
  { letter: "I", image: "../Alfabeto Quebra Cabeça/I.png" },
  { letter: "J", image: "../Alfabeto Quebra Cabeça/J.png" },
  { letter: "K", image: "../Alfabeto Quebra Cabeça/K.png" },
  { letter: "L", image: "../Alfabeto Quebra Cabeça/L.png" },
  { letter: "M", image: "../Alfabeto Quebra Cabeça/M.png" },
  { letter: "N", image: "../Alfabeto Quebra Cabeça/N.png" },
  { letter: "O", image: "../Alfabeto Quebra Cabeça/O.png" },
  { letter: "P", image: "../Alfabeto Quebra Cabeça/P.png" },
  { letter: "Q", image: "../Alfabeto Quebra Cabeça/Q.png" },
  { letter: "R", image: "../Alfabeto Quebra Cabeça/R.png" },
  { letter: "S", image: "../Alfabeto Quebra Cabeça/S.png" },
  { letter: "T", image: "../Alfabeto Quebra Cabeça/T.png" },
  { letter: "U", image: "../Alfabeto Quebra Cabeça/U.png" },
  { letter: "V", image: "../Alfabeto Quebra Cabeça/V.png" },
  { letter: "W", image: "../Alfabeto Quebra Cabeça/W.png" },
  { letter: "X", image: "../Alfabeto Quebra Cabeça/X.png" },
  { letter: "Y", image: "../Alfabeto Quebra Cabeça/Y.png" },
  { letter: "Z", image: "../Alfabeto Quebra Cabeça/Z.png" },
  { letter: "Ç", image: "../Alfabeto Quebra Cabeça/Ç.png" },
];

// Variável para armazenar a pontuação do jogador.
let score = 0;
// Variável que armazena o objeto da letra atualmente exibida.
let currentLetter;

// Elemento HTML que exibe a pontuação do jogador.
const scoreDisplay = document.getElementById("score");
// Elemento HTML que exibe a imagem da letra atual.
const currentLetterImg = document.getElementById("current-letter");
// Contêiner HTML que contém as opções de resposta.
const optionsContainer = document.querySelector(".options");

// Função que seleciona aleatoriamente uma letra do array "letters".
function getRandomLetter() {
  return letters[Math.floor(Math.random() * letters.length)];
}

// Função que exibe uma nova letra e cria as opções de resposta.
function displayLetter() {
  // Atribui uma letra aleatória como o desafio atual.
  currentLetter = getRandomLetter();
  // Atualiza a imagem da letra exibida para a imagem da letra atual.
  currentLetterImg.src = currentLetter.image;
  // Limpa as opções anteriores do contêiner.
  optionsContainer.innerHTML = "";

  // Inicializa as opções com a letra correta.
  const options = [currentLetter.letter];
  // Adiciona letras aleatórias diferentes da correta até que haja 4 opções.
  while (options.length < 4) {
    const randomLetter = getRandomLetter().letter;
    if (!options.includes(randomLetter)) {
      options.push(randomLetter);
    }
  }

  // Embaralha as opções para que a posição da resposta correta seja aleatória.
  options.sort(() => Math.random() - 0.5);

  // Cria um elemento "div" para cada opção de resposta e adiciona ao contêiner.
  options.forEach((letter) => {
    const optionDiv = document.createElement("div");
    optionDiv.classList.add("option");
    optionDiv.textContent = letter;
    // Adiciona um evento de clique que chama a função "checkAnswer" passando a opção selecionada.
    optionDiv.onclick = () => checkAnswer(letter);
    optionsContainer.appendChild(optionDiv);
  });
}

// Função que verifica se a resposta selecionada pelo jogador está correta.
function checkAnswer(selectedLetter) {
  // Se a resposta está correta, incrementa a pontuação e exibe uma mensagem de acerto.
  if (selectedLetter === currentLetter.letter) {
    score++;
    showMessage("Correto!", true);
  } else {
    // Caso a resposta esteja incorreta, decrementa a pontuação, exibe uma mensagem de erro,
    // e remove a opção incorreta.
    score--;
    showMessage("Errado! Tente novamente.", false);
    removeWrongOption(selectedLetter);
  }

  // Atualiza a exibição da pontuação.
  scoreDisplay.textContent = score;

  // Se a resposta está correta ou resta apenas uma opção, exibe a próxima letra.
  if (
    selectedLetter === currentLetter.letter ||
    optionsContainer.querySelectorAll(".option").length === 1
  ) {
    setTimeout(displayLetter, 500); // Avança para a próxima letra após um tempo
  }
}

// Função que remove uma opção incorreta do contêiner de opções.
function removeWrongOption(wrongLetter) {
  const optionDivs = optionsContainer.querySelectorAll(".option");
  optionDivs.forEach((option) => {
    if (option.textContent === wrongLetter) {
      option.remove(); // Remove a opção incorreta do DOM.
    }
  });

  // Se restar apenas uma opção, esta será a resposta correta.
  const remainingOptions = optionsContainer.querySelectorAll(".option");
  if (remainingOptions.length === 1) {
    const correctOption = remainingOptions[0].textContent;
    showMessage("A única opção restante é a correta: " + correctOption, true);

    // Desabilita a última opção restante para evitar novos cliques.
    remainingOptions[0].classList.add("disabled");
    remainingOptions[0].style.pointerEvents = "none";

    // Verifica automaticamente a resposta restante.
    checkAnswer(correctOption);
  }
}

// Elemento HTML para exibir mensagens de feedback ao jogador.
const messagePanel = document.getElementById("message-panel");

// Função que exibe uma mensagem temporária para o jogador.
// A mensagem varia em cor e texto de acordo com a verificação de acerto (isCorrect).
function showMessage(text, isCorrect) {
  messagePanel.textContent = text;
  messagePanel.style.backgroundColor = isCorrect ? "#4ad0a0" : "#e74c3c"; // Verde para correto, vermelho para errado
  messagePanel.style.display = "block";
  messagePanel.style.opacity = "1";

  // Esconde a mensagem após 2 segundos
  setTimeout(() => {
    messagePanel.style.opacity = "0";
    setTimeout(() => {
      messagePanel.style.display = "none";
    }, 500); // Tempo para o fade out
  }, 2000);
}

// Inicia o jogo exibindo a primeira letra.
displayLetter();
