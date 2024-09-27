/* Desenvolva seu código abaixo */

function playRockPaperScissor(jogador1, jogador2) {
    const opcoesValidas = ("Pedra", "Papel","Tesoura");

 if(jogador1 === jogador2){
    return "Empate!";
} 

else if(
    (jogador1 === "Pedra" && jogador2 === "Tesoura") || 
    (jogador1 === "Tesoura" && jogador2 === "Papel") ||
    (jogador1 === "Papel" && jogador2 === "Pedra")
    )
    {
        return "Jogador 1 venceu!";
    } 

    else { 
        return "Jogador 2 venceu!";
    }
}
    const resultado = playRockPaperScissor("Pedra", "Tesoura");
      console.log(resultado); 