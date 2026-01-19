// ===== Ao carregar a página =====

// Gera um número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Define o número máximo de tentativas
const maxTentativas = 10;

// Inicializa o contador de tentativas restantes
let tentativasRestantes = maxTentativas;

// (Apenas para você ver no console – o jogador não vê)
console.log("DEBUG - Número secreto:", numeroSecreto);

// ===== Ao clicar no botão "Chutar" =====
function chutar() {

    // Verifica se ainda há tentativas
    if (tentativasRestantes <= 0) {
        document.getElementById("dicas").textContent =
            "Você perdeu! O número secreto era " + numeroSecreto;
        return;
    }

    // Captura o palpite do jogador
    const palpite = Number(document.getElementById("palpite").value);

    // Validação do palpite
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        document.getElementById("dicas").textContent =
            "Digite um número válido entre 1 e 100.";
        return;
    }

    // Decrementa o número de tentativas
    tentativasRestantes--;

    // Compara o palpite com o número secreto
    if (palpite === numeroSecreto) {
        document.getElementById("resultado").textContent =
            "Você acertou!";
        document.getElementById("dicas").textContent =
            "Parabéns! Você venceu o jogo.";
        return;
    } 
    else if (palpite < numeroSecreto) {
        document.getElementById("dicas").textContent =
            "O número secreto é maior.";
    } 
    else {
        document.getElementById("dicas").textContent =
            "O número secreto é menor.";
    }

    // Exibe tentativas restantes
    document.getElementById("tentativas").textContent =
        `Tentativas restantes: ${tentativasRestantes}`;

    // Verifica se perdeu após a tentativa
    if (tentativasRestantes === 0) {
        document.getElementById("dicas").textContent =
            "Você perdeu! O número secreto era " + numeroSecreto;
    }
}
