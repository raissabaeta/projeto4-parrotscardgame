let imagens = ["unicornparrot.gif",
  "tripletsparrot.gif", 
  "revertitparrot.gif", 
  "metalparrot.gif", 
  "fiestaparrot.gif", 
  "explodyparrot.gif", 
  "bobrossparrot.gif"]

let quantidadeCartas = 0;
let quantidadeCartasAbertas = 0;

while(quantidadeCartas %2 !==0 || quantidadeCartas >14 || quantidadeCartas <4){
  quantidadeCartas = Number(prompt("Quantas cartas você quer jogar?"));
}

let cartas = []
for(i=0; i < quantidadeCartas /2; i++){
cartas.push(imagens[i])
cartas.push(imagens[i])
}
cartas.sort(comparador);

function comparador() { 
	return Math.random() - 0.5; 
}

let deck = document.getElementById('deck');

let quantidadeJogadas = 0;

function flippedCard (card){
  quantidadeJogadas +=1;
  if (cartasSelecionadas.length ===1){
    let segundaCarta = document.getElementById(card);
    let primeiraCarta = cartasSelecionadas[0];
    segundaCarta.classList.add("cardflipped");
    let imagem1 = primeiraCarta.querySelector('.verso').src;
    let imagem2 = segundaCarta.querySelector('.verso').src;
    if (imagem1 !== imagem2){
      flippedCardBack (primeiraCarta);
      flippedCardBack (segundaCarta);
    } else {
      quantidadeCartasAbertas +=2;
    }
    if (quantidadeCartas===quantidadeCartasAbertas){
      setTimeout (alert(`Fim de jogo, você ganhou em ${quantidadeJogadas} jogadas`), 3000)
    }
   
    cartasSelecionadas = [];


  } else {
    let primeiraCarta = document.getElementById(card);
    primeiraCarta.classList.add("cardflipped");
    cartasSelecionadas.push (primeiraCarta)
  }
}

let cartasSelecionadas = [];

function flippedCardBack  (card) {
  setTimeout (()=>{card.classList.remove ("cardflipped")}, 1000)
}


for(i=0;i < quantidadeCartas;i++){
    deck.innerHTML+=`<div id="card-${i}" class="card" onclick="flippedCard(this.id)"> 
    <div class="face front-face"> <img class="frente" src="./images/front.png"/></div>
    <div class="face back-face"><img class="verso" src="./images/${cartas[i]}"/></div>
  </div>`
  }

