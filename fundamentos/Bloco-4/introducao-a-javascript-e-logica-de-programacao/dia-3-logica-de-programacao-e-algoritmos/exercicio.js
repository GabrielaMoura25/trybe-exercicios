//EXERCICIO 1
// let fatorialDe10 = 10*9*8*7*6*5*4*3*2*1;
// console.log(fatorialDe10);

//EXERCICIO 2

// let word = 'tryber';
// let palavraInvertida = '';
// for(let index= 5; index<= word.length && index>=0; index-=1){
//     palavraInvertida += word[index];
// }
// console.log(palavraInvertida);

//EXERCICIO 3

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = array[0];
// let menorPalavra = array[0];
// for(let index = 0; index<array.length; index+=1){
//     if(array[index].length > maiorPalavra.length){
//         maiorPalavra = array[index];
//     }
// }
// for(let index = 0; index<array.length;index+=1){
//     if(array[index].length<menorPalavra.length){
//         menorPalavra = array[index];
//     }
// }
// console.log(maiorPalavra, menorPalavra);

//EXERCICIO 4

// let numeros = [];
// let maiorPrimo = '';
// for(let index = 0; index<=50; index +=1){
//     if(numeros[index] / numeros[index] === 1 && numeros[index]/1 === numeros[index])
// }

let biggestPrimeNumber = 0;

for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);