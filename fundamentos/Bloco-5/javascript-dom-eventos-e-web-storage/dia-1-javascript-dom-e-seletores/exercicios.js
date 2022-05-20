 /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
        2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        3. Crie uma função que mude a cor do quadrado vermelho para branco.
        4. Crie uma função que corrija o texto da tag <h1>.
        5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
        6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

// EXERCICIO 1.
function mudaOTexto() {
    let paragrafo = document.getElementsByTagName('p')[1];
    paragrafo.innerText = 'Ganhando mais de R$3.500 e em uma empresa muito foda!'
}
mudaOTexto();

// EXERCICIO 2.
function mudaCor(){
    let greenColor = document.getElementsByClassName('main-content')[0];
    greenColor.style.background = 'rgb(76,164,109)';
}
mudaCor();

// EXERCICIO 3.
function corQuadrado(){
    let whiteColor = document.getElementsByTagName('section')[0];
    whiteColor.style.backgroundColor = 'white';
}
corQuadrado();

// EXERCICIO 4.
function correcao(){
    let corretor = document.getElementsByTagName('h1')[0];
    corretor.innerText = 'Exercício 5.1 - JavaScript';
}
correcao();

// EXERCICIO 5.
function mudaTexto(){
    let paragrafo = document.getElementsByTagName('p')[0];
    paragrafo.innerText = paragrafo.innerText.toUpperCase();
}
mudaTexto();

// EXERCICIO 6.
function conteudoTags(){
    let exibicao = document.getElementsByTagName('p');
    for(let index = 0; index < exibicao.length; index +=1){
        console.log(exibicao[index].innerHTML);
    }
}
conteudoTags();