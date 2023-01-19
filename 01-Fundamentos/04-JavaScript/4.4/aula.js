let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
};

for (let key in player) {
    // console.log(player[key]);
}

let pizzasDoces = ['Chocolate', 'Banana', 'Morango'];

for (let key in pizzasDoces) {
    //console.log(key, pizzasDoces[key]);
}

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

for (let index in names) {
    //console.log('Olá, ' + names[index]);
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (let index in car) {
    //console.log(index + ': ' + car[index]);
}

/* ----------------------- FUNÇOES ----------------------- */

// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)
let number = {
    a: 10,
    b: 5,
    c: 11,
    d: 0,
}

let resultadoSoma = 0;
let resultadoSubtracao = 0;
let biggestNumber = 0;
let biggestNumberOutOf3 = 0;
let resultPositive = 0;
let resultNegative = 0;
let smallestNumber = 0;

/* ---------- SOMA ---------- */
function addition ({a, b}) {
    return resultadoSoma = a + b
}
console.log('A soma de A + B é: ' + addition(number));

/* ---------- SUBTRAÇÃO ---------- */
function subtraction ({a, b}) {
    return resultadoSubtracao = a - b;
}
console.log('A subtração de A - B é: ' + subtraction(number));

/* ---------- MULTIPLICAÇÃO ---------- */
function multiplication ({a, b}) {
    return resultadoSubtracao = a * b;
}
console.log('A multiplicação de A * B é: ' + multiplication(number));

/* ---------- DIVISÃO ---------- */
function division ({a, b}) {
    return resultadoSubtracao = a / b;
}
console.log('A divisão de A / B é: ' + division(number));

/* ---------- MÓDULO ---------- */
function modulo ({a, b}) {
    return resultadoSubtracao = a % b;
}
console.log('O módulo de A % B é: ' + modulo(number));

/* ---------- MAIOR entre 2 NÚMEROS ---------- */
function greaterNumber ({a, b}) {
    if (a > b) {
        return biggestNumber = a;
    } else {
        return biggestNumber = b;
    }
}
console.log('O maior número é: ' + greaterNumber(number));

/* ---------- MAIOR entre 3 NÚMEROS ---------- */
function greaterNumberOutOf3 ({a, b, c}) {
    if (a > b && a > c) {
        return biggestNumberOutOf3 = a;
    } else if (b > a && b > c) {
        return biggestNumberOutOf3 = b;
    } else {
        return biggestNumberOutOf3 = c;
    }
}
console.log('O maior número é: ' + greaterNumberOutOf3(number));

/* ---------- POSITIVE OR NEGATIVE ---------- */
function positiveOrNegative ({d}) {
    if (d > 0) {
        return resultPositive = "O número: " + d + " é positive";
    } else if (d < 0){
        return resultNegative = "O número: " + d + " é negative";
    } else {
        return resultNegative = "O número é zero "
    }
}
console.log(positiveOrNegative(number));