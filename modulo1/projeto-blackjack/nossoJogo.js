/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo de Blackjack!");

let cartaUmJogador = comprarCarta();
let cartaDoisJogador = comprarCarta();
let cartaUmComputador = comprarCarta();
let cartaDoisComputador = comprarCarta();


if(confirm("Quer iniciar uma nova rodada?")) {
	let somaCartasJogador = cartaUmJogador.valor + cartaDoisJogador.valor;
   let somaCartasComputador = cartaUmComputador.valor + cartaDoisComputador.valor;

   console.log(`Cartas Jogador: ${cartaUmJogador.texto} ${cartaDoisJogador.texto} - Pontuação: ${somaCartasJogador}`);
   console.log(`Cartas Computador: ${cartaUmComputador.texto} ${cartaDoisComputador.texto} - Pontuação: ${somaCartasComputador}`);

   if (somaCartasJogador > somaCartasComputador) {
      console.log(`Ganhouuu!`);
   } else if (somaCartasJogador < somaCartasComputador) {
      console.log(`Perdeuuuuuuuu!`);
   }else if (somaCartasJogador == somaCartasComputador) {
      console.log (`Putz, empate!`)
   }

} else {
   console.log(`Que pena, o jogo acabou!`)


}




























   