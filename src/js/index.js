// aqui vai pegar o elemento html da seta avançar
console.log(document.getElementById("btn-avancar"));

// utilizamos o const para criar uma variavel
const btnAvancar = document.getElementById("btn-avancar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;
const btnVoltar = document.getElementById("btn-voltar");

// nessa parte estou identificando o click na seta do site
btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return;

    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    // mudar para a proxima carta(avançar)
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");

});

// voltar cartas
btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;

    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    // mudar para a proxima carta
    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");

});