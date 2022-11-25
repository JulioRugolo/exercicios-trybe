//Obtenha o valor “Serviços” do array menu:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf('Serviços');

console.log(menuServices);

//Adicione o valor “Contato” no final do array menu:

let menu1 = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu1.push('Contato')

console.log(menu1);

// aula de lanços de repetição (for)

var numero = 7;

for (let contador = 1; contador <= 9; contador++){
    console.log('')
    console.log(numero * contador);
}


console.log("");
console.log("Exercicio de for usando .length:");
let listaDeNomes = ['Julio', 'Mirela', 'Anna Julia', 'Filippo'];

for (let index = 0; index < listaDeNomes.length; index++){
    let mensagemBoasVindas = 'Boas vindas, ' + listaDeNomes[index] + '!';
    console.log(mensagemBoasVindas);
}

// Utilize o for para imprimir os elementos da lista groceryList com o console.log():
console.log("");
console.log("Exercicio de for usando .length:");

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index +=1){
    console.log(groceryList[index]);
}

// Simples, certo? O laço for/of permite iterar os valores das propriedades, nos retornando os números dentro do array numeros.:
console.log("");
console.log("Escrevendo letra por letra com for/of");

let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}


//Utilize o for/of para imprimir os elementos da lista names com o console.log():
console.log("");
console.log("Exercicio de for/of:");

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let index of names) {
  console.log(index);
}

// Aula sobre "while":
console.log("");
console.log("Aula sobre 'while'");


function dice () { 
    return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
while (d1 === d2) {
    d2 = dice();
}

console.log(d2);
