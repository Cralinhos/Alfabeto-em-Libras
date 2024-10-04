document.getElementById("input-text").addEventListener("input", function() {
    const inputText = this.value.toUpperCase();
    const constructedPhrase = document.getElementById("constructed-phrase");

    constructedPhrase.innerHTML = "";
    if (inputText.length === 0) {
        return; 
    }

    for (let char of inputText) {
        if (char === ' ') {
            constructedPhrase.appendChild(document.createTextNode('\u00A0')); // Adiciona um espaço em branco
            continue; // Ignora a iteração atual
        }

        const letterDiv = document.createElement("div");
        letterDiv.classList.add("letter");

        const img = document.createElement("img");
        img.src = char === "Ç" ? "Alfabeto Pagina Principal/Ç.png" : `Alfabeto Pagina Principal/${char}.png`;
        img.alt = `${char} em Língua de Sinais`;

        letterDiv.appendChild(img);
        constructedPhrase.appendChild(letterDiv);
    }
});
