// Seleciona o elemento com o id "constructed-phrase" para exibir as letras selecionadas e montadas.
// Esse elemento será usado para construir uma frase à medida que o usuário clica em letras individuais.
const constructedPhrase = document.getElementById("constructed-phrase");

// Seleciona o botão com o id "clear-btn" que, quando clicado, limpa o conteúdo da frase montada.
const clearButton = document.getElementById("clear-btn");

// Seleciona todos os elementos que possuem a classe "letter".
// Esses elementos representam as letras individuais que o usuário pode clicar para montar a frase.
const letters = document.querySelectorAll(".letter");

// Adiciona um event listener a cada elemento que possui a classe "letter".
// Esse listener detecta o clique do usuário em cada letra e adiciona essa letra à frase construída.
letters.forEach((letter) => {
  // Para cada elemento "letter", adicionamos um event listener do tipo "click".
  letter.addEventListener("click", () => {
    // Obtém o valor do atributo "data-letter" do elemento clicado.
    // Esse atributo contém a letra associada ao elemento que será usada na frase.
    const selectedLetter = letter.getAttribute("data-letter");

    // Adiciona a letra selecionada ao conteúdo atual da frase, atualizando o elemento "constructedPhrase".
    constructedPhrase.innerHTML += selectedLetter;
  });
});

// Adiciona um event listener ao botão de limpar (clearButton).
// Quando clicado, esse listener define o conteúdo do elemento "constructedPhrase" como uma string vazia,
// limpando assim a frase montada.
clearButton.addEventListener("click", () => {
  constructedPhrase.innerHTML = "";
});

// Adiciona um event listener ao evento "DOMContentLoaded", que é acionado quando o documento HTML foi totalmente carregado.
// Isso garante que os elementos HTML necessários existam antes de acessá-los.
document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o botão com o id "clear-letra", que permite apagar a última letra adicionada à frase montada.
  const clearLetterButton = document.getElementById("clear-letra");

  // Seleciona o elemento que exibe a frase montada, identificado pelo id "constructed-phrase".
  const constructedPhraseDiv = document.getElementById("constructed-phrase");

  // Adiciona um event listener ao botão "clear-letra" para ouvir cliques.
  clearLetterButton.addEventListener("click", () => {
    // Obtém o texto atual da frase montada.
    let currentPhrase = constructedPhraseDiv.textContent;

    // Verifica se a frase atual possui pelo menos uma letra.
    // Se sim, remove a última letra da frase.
    if (currentPhrase.length > 0) {
      // Remove o último caractere do texto usando o método slice, que retorna uma nova string sem o último caractere.
      currentPhrase = currentPhrase.slice(0, -1);

      // Atualiza o conteúdo da frase montada com o novo texto.
      constructedPhraseDiv.textContent = currentPhrase;
    }
  });
});

// Adiciona um event listener ao botão com o id "espaco-letra".
// Esse botão permite adicionar um espaço em branco à frase montada.
document.getElementById("espaco-letra").addEventListener("click", function () {
  // Obtém o conteúdo atual da frase montada.
  let fraseAtual = constructedPhrase.textContent;

  // Adiciona um espaço ao final da frase atualizada e define o novo conteúdo no elemento "constructedPhrase".
  constructedPhrase.innerHTML = fraseAtual + " ";
});
