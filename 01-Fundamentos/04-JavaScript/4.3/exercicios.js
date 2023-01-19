// // Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.
// const fatorial = 6;
// let resultado = 1;

// for (let index = 1; index <= fatorial; index += 1){
//     resultado *= index;
//     //console.log(resultado);
// }

// //Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'tryber';
// let reverseWord = '';

// for (let index = 0; index < word.length; index += 1){
//     reverseWord += word[word.length - 1 - index];
// }

// //console.log(reverseWord);

// //Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let biggestWord = array[0];
// let smallestWord = array[0];

// for(let index = 0; index < array.length; index += 1){
//     if(biggestWord.length < array.length){
//         biggestWord = array[index];
//     }
// }
// //console.log(biggestWord);

// for(let index = 0; index < array.length; index += 1){
//     if(array[index].length < smallestWord.length){
//         smallestWord = array[index];
//     }
// }
// //console.log(smallestWord);


// //Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

// let maiorNumeroPrimo = 0;

// for (let numeroAtual = 2; numeroAtual <= 50; numeroAtual += 1) {
//   let isPrime = true;
//   for (let divisor = 2; divisor < numeroAtual; divisor += 1) {
//     if (numeroAtual % divisor === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     maiorNumeroPrimo = numeroAtual;
//   }
// }

// //console.log(maiorNumeroPrimo);

// let n = 2;
// let symbol = '*';
// let line = "";

// for(index = 0; index < n; index +=1){
//     line = line + symbol;
// }

// for(index = 0; index < n; index += 1){
//     //console.log(line);
// }

// // triangulo

// let n2 = 5;
// let symbol2 = '*';
// let line3 = "";

// for(index = 0; index <= n2; index +=1){
//     console.log(line3);
//     line3 = line3 + symbol2;
// }

// triangulo invertido

let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for(let columnIndex = 0; columnIndex < n; columnIndex +=1){
        if(columnIndex < inputPosition){
            inputLine = inputLine + " ";
        } else {
            inputLine = inputLine + symbol;
        }
    }
console.log(inputLine);
    inputLine = '';
    inputPosition -= 1;
}
