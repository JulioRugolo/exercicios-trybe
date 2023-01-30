// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Banana', 'Manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Coca-Cola', 'Parmegiana', 'Croquete'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  const listItems = [...fruit, ...additional]
  return listItems;
};

console.log(fruitSalad(specialFruit, additionalItens));

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60, 90)); // 88