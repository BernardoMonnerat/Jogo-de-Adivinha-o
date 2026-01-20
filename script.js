
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

    const maxTentativas = 10;

    let tentativasRestantes = maxTentativas;


    function chutar(){

        let palpite = Number(document.getElementById("palpite").value);

        if(tentativasRestantes <= 0){
            document.getElementById("erro").textContent = "Você perdeu! O número secreto era " + numeroAleatorio;
            return;
        }

        if(palpite < 1 || palpite > 100){
            document.getElementById("erro").textContent = "Valor invalido! Digite um numero valido de 1 ate 100!";
            return;
        }

        tentativasRestantes--;

        if(palpite === numeroAleatorio){
            document.getElementById("resultado").textContent = "Você acertou!";
            return;
        }else if(palpite < numeroAleatorio){
            document.getElementById("dicas").textContent = "O número secreto é maior";
        }else{
            document.getElementById("dicas").textContent = "O número secreto é menor";
        }

        document.getElementById("tentativas").textContent = "Restam: " + tentativasRestantes + " Tentativas"


            if(tentativasRestantes === 0){
            document.getElementById("erro").textContent = "Você perdeu! O número secreto era X";
            return;
        }
        
    }
