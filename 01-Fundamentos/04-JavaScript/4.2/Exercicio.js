let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
let maiorNum = 0;
let menorNum = numbers[0];
let novoNumbers = [];
let somandoArray = 1;

console.log('')
console.log('1-) Percorra o array imprimindo todos os valores nele contidos com a função console.log')
for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
}

console.log('')
console.log('2-) Some todos os valores contidos no array e imprima o resultado;')

for (let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
    console.log(soma);
}

console.log('')
console.log('3-) Some todos os valores contidos no array e imprima o resultado;')

for (let index = 0; index < numbers.length; index += 1){
    media += numbers[index];
}
let mediaAritimetica = media/numbers.length;
console.log(mediaAritimetica);

console.log('')
console.log('4-) Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;')

if (mediaAritimetica > 20){
   console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}

console.log('')
console.log('5-) Utilizando for, descubra qual o maior valor contido no array e imprima-o')

for (let index = 0; index < numbers.length; index += 1){
    if(numbers[index] > maiorNum){
        maiorNum = numbers[index];
    }
}
console.log(maiorNum);

console.log('')
console.log('6-) Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;')

for (let index = 0; index < numbers.length; index += 1){
    if(numbers[index]%2 === 0){
        console.log('O número ' + numbers[index] + ' é par');
    } else {
        console.log('O número é ' + numbers[index] + ' é impar');
    }
}

console.log('')
console.log('7-) Utilizando for, descubra qual o menor valor contido no array e imprima-o;')

for (let index = 0; index < numbers.length; index += 1){
    if(numbers[index] < menorNum){
        menorNum = numbers[index];
    }
}
console.log(menorNum);

console.log('')
console.log('8-) Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;')

for (let index = 1; index <= 25; index += 1) {
    novoNumbers.push(index);
}

console.log(novoNumbers);


console.log('')
console.log('9-) Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.')

for(let index = 0; index < novoNumbers.length; index +=1){
    console.log(novoNumbers/2);
};