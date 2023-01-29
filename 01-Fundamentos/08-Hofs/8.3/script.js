const numbers = [50, 85, -30, 3, 15];
const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);
const bigger = numbers.reduce(getBigger);
console.log(bigger); // 85

const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const isEven = (number) => number % 2 === 0;
const sum = (accumulator, number) => accumulator + number;
const sumNumbers = (array) => array.filter(isEven).reduce(sum);
console.log(sumNumbers(numbers2)); // 152