let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto  = gerarNumeroAleatorio();
let tentativas = 1;

function exibirNaTela(tag, texto) {
    let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese famale', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
exibirTextoNaTela('p', 'Esclha um numero entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirNaTela('h1', 'acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o numero secreto com 5 ${tentativas} ${palavraTentativa}`;
        exibirNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disable;');
    } else {
        if (chute > numeroSecreto) {
            exibirNaTela('p', 'O numero secreto é menor');
        } else {
            exibirNaTela('p', 'o numero secreto é maior');
        } tentativas++;
        limparCampo();
    }

}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio ();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido;
   }
 }

 function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
 }
 
 function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementsById('reiniciar').setAttribute('disabled', true);
 }