// Dicionário de vídeos com palavras e caminhos dos arquivos de vídeo
const videoDictionary = {
    "amor": "video/amor-SINAL.mp4",
    "familia": "videos/familia.mp4",
    "escola": "videos/escola.mp4",
    // Adicione mais palavras e vídeos aqui
  };
  
  // Seleciona elementos
  const wordInput = document.getElementById("word-input");
  const searchVideoBtn = document.getElementById("search-video-btn");
  const videoOutput = document.getElementById("video-output");
  
  // Evento de clique no botão para buscar vídeo
  searchVideoBtn.addEventListener("click", () => {
    const word = wordInput.value.toLowerCase().trim(); // Normaliza a palavra
    if (videoDictionary[word]) {
      // Limpa o conteúdo atual e exibe o vídeo correspondente
      videoOutput.innerHTML = `
        <video controls>
          <source src="${videoDictionary[word]}" type="video/mp4" />
          Seu navegador não suporta a reprodução de vídeos.
        </video>`;
    } else {
      // Mostra uma mensagem caso a palavra não esteja no dicionário
      videoOutput.innerHTML = "<p>Vídeo não encontrado para esta palavra.</p>";
    }
  });
  