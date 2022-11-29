const a = 105;
const b = 32;
const c = 102;
console.log("------Resultado do Exercicio 1:");
if(a > b){
    console.log("O número " + a + " é maior que " + b);
}
else if(b>a){
    console.log("O número " + b + " é maior que " + a);
}
else{
    console.log("Os números são iguais");
}

console.log("------Resultado do Exercicio 2:");
if(a>b && a>c){
    console.log("O maior número é: " + a);
}
else if(b>a && b>c){
    console.log("O maior número é: " + b);
}
else if(c>a && c>b){
    console.log("O maior número é: " + c);
}
else{
    console.log("os numeros são iguais");
}

console.log("------Resultado do Exercicio 3:");

const d = -5;
const e = 10;
const f = -10;

if(d>0){
    console.log("Esse número é positivo");
}
else if(d === 0){
    console.log("Esse número é zero");
}
else{
    console.log("Esse número é negativo")
}

console.log("------Resultado do Exercicio 4:");

const lado1 = -10;
const lado2 = 60;
const lado3 = 70;

if(lado1 + lado2 + lado3 === 180){
    console.log(true);
}
else if(lado1 <= 0 || lado2 <=0 || lado3 <=0){
    console.log("Um ou mais angulos são invalidos")
}
else{
    console.log(false)
}

console.log("------Resultado do Exercicio 5:");
chessPiece = "queen";

switch(chessPiece){
    case "Queen":
    case "queen":
        console.log("Rainha --> Todas as direções");
        break;
    case "King":
    case "king":
        console.log("Rei --> Todas as direções");
        break;

}
