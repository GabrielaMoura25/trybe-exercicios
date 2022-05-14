// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//EXERCICIO 1

// for(index=0;index<numbers.length;index+=1){
//     console.log(numbers[index])
// }

//EXERCICIO 2

// let soma = [numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5]+ numbers[6]+numbers[7]+numbers[8]+numbers[9]];
// console.log(soma);

//EXERCICIO 3

// let soma = [numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5]+ numbers[6]+numbers[7]+numbers[8]+numbers[9]];
// console.log(soma/10);

//EXERCICIO 4

// let soma = [numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5]+ numbers[6]+numbers[7]+numbers[8]+numbers[9]];
// let mediaAritmetica = soma/10;
// if (mediaAritmetica>20){
//     console.log('Valor maior que 20')
// }
// else{
//     console.log('Valor menor ou igual a 20')
// }

//EXERCICIO 5

// let numero = numbers[0];
// for (let index = 0; index < numbers.length; index+=1) {
//     if (numbers[index] > numero) {
//         numero = numbers[index]
        
//     } 
// }
// console.log(numero)

//EXERCICIO 6

// let result = 0;
// for(index=0; index<numbers.length; index+=1){
//     if(numbers[index] % 2 !== 0){
//         result += 1;
//     }
// }

// if (result === 0) {
//     console.log('nenhum valor ímpar encontrado');
// } 
// else {
//     console.log(result);
// }

//EXERCICIO 7

// let numero = numbers[0];
// for(index = 0; index < numbers.length; index +=1){;
//     if(numbers[index]< numero){
//         numero = numbers[index];
//     }
// }
// console.log(numero)

//EXERCICIO 8

// let stars = [];

// for(let index = 1; index <= 25; index +=1){
//     stars.push(index);
// }
// console.log(stars);

//EXERCICIO 9

// for(let index = 0; index < stars.length; index +=1){
//     console.log(stars[index]/2);
// }

//BONUS

//EXERCICIO 1

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] < numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }
//   console.log(numbers);

//EXERCICIO 2

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] > numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }
//   console.log(numbers);

//EXERCICIO 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArray = [];
for(let index = 0; index <numbers.length; index +=1){
        if(index + 1 < numbers.length){
            novoArray.push(numbers[index]*numbers[index+1]);
        }
        else {
            novoArray.push(numbers[index]*2);
        }
    }
    console.log(novoArray);