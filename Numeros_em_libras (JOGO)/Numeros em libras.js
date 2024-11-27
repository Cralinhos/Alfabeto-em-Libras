// Adiciona um event listener ao elemento com id "input-text" para detectar qualquer alteração no campo de entrada.
// O evento "input" é acionado sempre que o valor do campo muda, permitindo a atualização imediata da frase montada.
document.getElementById("input-text").addEventListener("input", function () {
  // Obtém o valor do campo de entrada, converte para maiúsculas e armazena na variável "inputText".
  // A conversão para maiúsculas permite que o código funcione independentemente do caso das letras digitadas.
  const inputText = this.value.toUpperCase();

  // Seleciona o elemento "constructed-phrase" onde a frase montada será exibida.
  const constructedPhrase = document.getElementById("constructed-phrase");

  // Limpa o conteúdo do elemento "constructedPhrase" para que a nova frase possa ser exibida.
  constructedPhrase.innerHTML = "";

  // Se o campo de entrada estiver vazio (inputText.length === 0), interrompe a execução da função.
  if (inputText.length === 0) {
    return;
  }

  // Itera sobre cada caractere da string "inputText" digitada pelo usuário.
  for (let char of inputText) {
    // Verifica se o caractere atual é um espaço em branco.
    if (char === " ") {
      // Se for um espaço, adiciona um espaço em branco utilizando o caractere especial "\u00A0".
      // Isso mantém a formatação visual correta no elemento.
      constructedPhrase.appendChild(document.createTextNode("\u00A0"));
      continue; // Passa para a próxima iteração do loop, ignorando o código abaixo para o caractere atual.
    }

    // Cria um elemento "div" para armazenar cada letra ou número.
    const letterDiv = document.createElement("div");
    letterDiv.classList.add("letter"); // Adiciona a classe "letter" para estilização da letra.

    // Cria um elemento "img" para exibir a imagem correspondente ao caractere atual.
    const img = document.createElement("img");

    // Verifica se o caractere atual é um número.
    if (!isNaN(char)) {
      // Define o caminho da imagem correspondente ao número, usando a pasta "Números em Libras".
      img.src = `../Números em Libras/${char}.png`;
    }
    // Verifica se o caractere atual é a letra "Ç".
    else if (char === "Ç") {
      // Define o caminho da imagem correspondente ao caractere "Ç" na pasta "Alfabeto Pagina Principal".
      img.src = "../Alfabeto Pagina Principal/Ç.png";
    }
    // Caso contrário, assume-se que o caractere é uma letra do alfabeto.
    else {
      // Define o caminho da imagem correspondente à letra atual.
      img.src = `../Alfabeto Pagina Principal/${char}.png`;
    }

    // Define o atributo "alt" da imagem para acessibilidade, descrevendo o caractere e indicando que é em Língua de Sinais.
    img.alt = `${char} em Língua de Sinais`;

    // Adiciona a imagem (img) ao "div" da letra (letterDiv).
    letterDiv.appendChild(img);

    // Adiciona o "div" da letra ao elemento "constructedPhrase", exibindo o caractere correspondente em Língua de Sinais.
    constructedPhrase.appendChild(letterDiv);
  }
});
