document.addEventListener('DOMContentLoaded', () => {
    const feedback = document.getElementById('feedback');
    const userInput = document.getElementById('user-input');
    const submitBtn = document.getElementById('submit-btn');
    const signContainer = document.getElementById('sign-container');
    const showAnswersButton = document.getElementById('show-answers'); // Botão para mostrar respostas

    const phrases = [
        { signs: ['A', 'M', 'O', 'R'], phrase: 'AMOR' },
        { signs: ['C', 'A', 'S', 'A'], phrase: 'CASA' },
        { signs: ['A', 'M', 'I', 'G', 'O'], phrase: 'AMIGO' },
        { signs: ['F', 'A', 'M', 'I', 'L', 'I', 'A'], phrase: 'FAMILIA' },
        { signs: ['T', 'R', 'A', 'B', 'A', 'L', 'H', 'O'], phrase: 'TRABALHO' },
        { signs: ['E', 'S', 'C', 'O', 'L', 'A'], phrase: 'ESCOLA' },
        { signs: ['C', 'O', 'M', 'I', 'D', 'A'], phrase: 'COMIDA' },
        { signs: ['A', 'G', 'U', 'A'], phrase: 'AGUA' },
        { signs: ['S', 'O', 'L'], phrase: 'SOL' },
        { signs: ['L', 'U', 'A'], phrase: 'LUA' },
        { signs: ['C', 'O', 'R', 'A', 'C', 'A', 'O'], phrase: 'CORACAO' },
        { signs: ['F', 'E', 'L', 'I', 'Z'], phrase: 'FELIZ' },
        { signs: ['T', 'R', 'I', 'S', 'T', 'E'], phrase: 'TRISTE' },
        { signs: ['T', 'E', 'M', 'P', 'O'], phrase: 'TEMPO' },
        { signs: ['D', 'I', 'A'], phrase: 'DIA' },
        { signs: ['N', 'O', 'I', 'T', 'E'], phrase: 'NOITE' },
        { signs: ['V', 'I', 'D', 'A'], phrase: 'VIDA' },
        { signs: ['C', 'I', 'D', 'A', 'D', 'E'], phrase: 'CIDADE' },
        { signs: ['N', 'A', 'T', 'U', 'R', 'E', 'Z', 'A'], phrase: 'NATUREZA' },
        { signs: ['M', 'U', 'S', 'I', 'C', 'A'], phrase: 'MUSICA' },
        { signs: ['D', 'A', 'N', 'C', 'A'], phrase: 'DANCA' },
        { signs: ['J', 'O', 'G', 'O'], phrase: 'JOGO' },
        { signs: ['C', 'A', 'R', 'R', 'O'], phrase: 'CARRO' },
        { signs: ['L', 'I', 'V', 'R', 'O'], phrase: 'LIVRO' },
        { signs: ['P', 'R', 'A', 'I', 'A'], phrase: 'PRAIA' },
        { signs: ['R', 'U', 'A'], phrase: 'RUA' },
        { signs: ['O', 'L', 'H', 'O'], phrase: 'OLHO' },
        { signs: ['M', 'A', 'O'], phrase: 'MAO' },
        { signs: ['C', 'A', 'B', 'E', 'L', 'O'], phrase: 'CABELO' }, // Corrigido
        { signs: ['S', 'O', 'R', 'R', 'I', 'S', 'O'], phrase: 'SORRISO' },
        { signs: ['C', 'H', 'U', 'V', 'A'], phrase: 'CHUVA' },
        { signs: ['C', 'A', 'L', 'O', 'R'], phrase: 'CALOR' },
        { signs: ['F', 'R', 'I', 'O'], phrase: 'FRIO' },
        { signs: ['F', 'E', 'S', 'T', 'A'], phrase: 'FESTA' },
        { signs: ['E', 'S', 'T', 'R', 'E', 'L', 'A'], phrase: 'ESTRELA' },
        { signs: ['S', 'O', 'N', 'H', 'O'], phrase: 'SONHO' },
        { signs: ['R', 'I', 'S', 'O'], phrase: 'RISO' },
        { signs: ['P', 'A', 'Z'], phrase: 'PAZ' },
        { signs: ['A', 'L', 'E', 'G', 'R', 'I', 'A'], phrase: 'ALEGRIA' },
        { signs: ['S', 'E', 'G', 'U', 'R', 'A', 'N', 'C', 'A'], phrase: 'SEGURANCA' },
        { signs: ['S', 'A', 'U', 'D', 'E'], phrase: 'SAUDE' },
        { signs: ['A', 'V', 'E', 'N', 'T', 'U', 'R', 'A'], phrase: 'AVENTURA' },
        { signs: ['V', 'I', 'A', 'G', 'E', 'M'], phrase: 'VIAGEM' },
        { signs: ['L', 'A', 'R', 'A', 'N', 'J', 'A'], phrase: 'LARANJA' },
        { signs: ['F', 'R', 'U', 'T', 'A'], phrase: 'FRUTA' },
        { signs: ['V', 'E', 'R', 'D', 'U', 'R', 'A'], phrase: 'VERDURA' },
        { signs: ['C', 'A', 'F', 'E'], phrase: 'CAFE' },
        { signs: ['B', 'O', 'L', 'O'], phrase: 'BOLO' },
        { signs: ['F', 'O', 'G', 'O'], phrase: 'FOGO' },
        { signs: ['N', 'E', 'V', 'E'], phrase: 'NEVE' },
        { signs: ['M', 'A', 'R'], phrase: 'MAR' },
        { signs: ['C', 'A', 'M', 'I', 'N', 'H', 'O'], phrase: 'CAMINHO' },
        { signs: ['P', 'A', 'S', 'S', 'O'], phrase: 'PASSO' },
        { signs: ['L', 'U', 'Z'], phrase: 'LUZ' },
        { signs: ['S', 'O', 'M'], phrase: 'SOM' },
        { signs: ['T', 'O', 'Q', 'U', 'E'], phrase: 'TOQUE' },
        { signs: ['C', 'A', 'U', 'S', 'A'], phrase: 'CAUSA' },
        { signs: ['E', 'F', 'E', 'I', 'T', 'O'], phrase: 'EFEITO' },
        { signs: ['I', 'D', 'E', 'A', 'L'], phrase: 'IDEAL' },
        { signs: ['R', 'E', 'F', 'L', 'E', 'X', 'A', 'O'], phrase: 'REFLEXAO' },
        { signs: ['G', 'R', 'A', 'T', 'I', 'D', 'A', 'O'], phrase: 'GRATIDAO' },
        { signs: ['A', 'M', 'I', 'Z', 'A', 'D', 'E'], phrase: 'AMIZADE' },
        { signs: ['R', 'E', 'S', 'P', 'E', 'I', 'T', 'O'], phrase: 'RESPEITO' },
        { signs: ['B', 'O', 'N', 'D', 'A', 'D', 'E'], phrase: 'BONDADE' },
        { signs: ['V', 'E', 'R', 'D', 'A', 'D', 'E'], phrase: 'VERDADE' },
        { signs: ['J', 'U', 'S', 'T', 'I', 'C', 'A'], phrase: 'JUSTICA' },
        { signs: ['C', 'O', 'R', 'A', 'G', 'E', 'M'], phrase: 'CORAGEM' },
        { signs: ['S', 'A', 'B', 'E', 'D', 'O', 'R', 'I', 'A'], phrase: 'SABEDORIA' },
        { signs: ['D', 'E', 'S', 'A', 'F', 'I', 'O'], phrase: 'DESAFIO' },
        { signs: ['V', 'I', 'T', 'O', 'R', 'I', 'A'], phrase: 'VITORIA' },
        { signs: ['F', 'R', 'A', 'C', 'A', 'S', 'S', 'O'], phrase: 'FRACASSO' },
        { signs: ['S', 'U', 'S', 'T', 'E', 'N', 'T', 'A'], phrase: 'SUSTENTA' },
        { signs: ['E', 'X', 'E', 'R', 'C', 'I', 'C', 'I', 'O'], phrase: 'EXERCICIO' },
        { signs: ['T', 'E', 'M', 'E', 'R', 'A', 'R'], phrase: 'TEMERAR' },
    ];
    
    let currentPhrase = {};
    
    // Função para iniciar uma nova frase
    function loadNewPhrase() {
        feedback.textContent = '';
        userInput.value = '';

        // Escolhe uma nova frase aleatória
        currentPhrase = phrases[Math.floor(Math.random() * phrases.length)];

        // Limpa o container de sinais para nova frase
        signContainer.innerHTML = '';

        // Atualiza os sinais exibidos dinamicamente
        currentPhrase.signs.forEach((sign, index) => {
            const img = document.createElement('img');
            img.src = `Alfabeto Quebra Cabeça/${sign}.png`;
            img.alt = sign;
            img.id = `sign${index + 1}`;
            signContainer.appendChild(img);
        });
    }

    // Verifica a resposta
    submitBtn.addEventListener('click', () => {
        const userAnswer = userInput.value.toUpperCase().trim();
        if (userAnswer === currentPhrase.phrase) {
            feedback.textContent = 'Parabéns! Você acertou.';
            feedback.classList.add('correct');
            feedback.classList.remove('wrong');

            // Espera 3 segundos antes de carregar uma nova fase
            setTimeout(() => {
                loadNewPhrase();
            }, 1000); // 3000 ms = 3 segundos
        } else {
            feedback.textContent = 'Tente novamente.';
            feedback.classList.add('wrong');
            feedback.classList.remove('correct');
        }
    });

    showAnswersButton.addEventListener('click', (event) => {
        event.preventDefault(); // Impede a atualização da página
        event.stopPropagation();
        showAnswers();
    });

    function showAnswers() {
        const signImages = signContainer.querySelectorAll('img');
        signImages.forEach((img, index) => {
            const sign = currentPhrase.signs[index];
            img.src = `Alfabeto Pagina Principal/${sign}.png`;
        });
        answerShown = true;
    }

    // Carrega a primeira frase ao carregar a página
    loadNewPhrase()
    
});
