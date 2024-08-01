//Declaração de variáveis
var nome = document.getElementById ('nome');
var cor = document.querySelector/* queryselector puxa tanto do id quanto do name*/  ('#cor');
var botao = document.querySelector ('#btn');
var titulo = document.querySelector ('#titulo');

//Ação do Botão "Cadastrar"
botao.addEventListener('click', function(e){

    e.preventDefault();
    alert("Bem-vindo "+nome.value);
});

//Ação do evento "cor"    
cor.addEventListener('change'/*change espera voce selecionar para mostrar o alerta */, function(){
    //alert(cor.value);
    pagina.style.backgroundColor = cor.value;
    text.style.color = "white";
});

window.onload = function(){
    var corFav = prompt("Qual sua cor favorita ?");
    var px = prompt("Digite um valor de posição de eixo X");
    var py = prompt("Digite um valor de posição de eixo Y");

    var alvo = document.querySelector('#alvo');

    //move a bolinha para a direita
    alvo.style.marginLeft = px + "vw";
    //move a bolinha para a esquerda
    alvo.style.marginTop = py + "vh";
    //muda a cor da bolinha
    alvo.style.backgroundColor = corFav;
}
