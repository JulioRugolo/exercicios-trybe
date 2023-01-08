/* 1- Agora vamos fazer um exercício que vai deixar nítido como funções com responsabilidades bem definidas deixam o código mais bem escrito.

A manipulação de arrays pode ser complexa em alguns momentos e, por isso, o JavaScript conta com diversos métodos para a sua manipulação. A documentação é sempre a nossa maior aliada. Se você tiver curiosidade de ler mais sobre esses métodos, clique aqui para acessar a documentação completa. Não se preocupe em entender todos os métodos, eles serão trabalhados cada vez com mais frequência durante o curso e, sempre que um método novo for necessário, ele será ensinado a você.

Spoiler-alert: para os exercícios do dia, os métodos split, join e reverse podem ser muito úteis. */
function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }
//   console.log(verificaPalindrome('arara'));
//   console.log(verificaPalindrome('desenvolvimento')); 

// // 2- Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// Array de teste: [2, 3, 6, 7, 10, 1];.

// Valor esperado no retorno da função: 4.

const array = [2, 11, 3, 6, 7, 10, 1];
array.sort();
let biggest = [0];

function bigger(array) {
    for (let index = 0; index < array.length; index += 1) {
        if (biggest < array[index]){
            biggest = index;
        }
    }
    return biggest;
}
console.log(bigger(array));

// // 3- Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// Array de teste: [2, 4, 6, 7, 10, 0, -3];.

// Valor esperado no retorno da função: 6.

const arraySmallest = [2, 4, 6, 7, 10, 0, -3];
arraySmallest.sort()
let smallest = [];

function smaller(arraySmallest) {
    for (let index = 0; index < arraySmallest.length; index += 1) {
        if (smallest > arraySmallest[index]){
            smallest = index;
        }        
    }
    return smallest;   
}
console.log(smaller(arraySmallest));

/* 4- Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

Valor esperado no retorno da função: Fernanda. */

const names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let biggestName = []
let characterCounter = 0;

function biggerName(names) {
    for (let index = 0; index < names.length; index += 1) {
        if(names[index].length > characterCounter){
            biggest
        }
        
    }
}