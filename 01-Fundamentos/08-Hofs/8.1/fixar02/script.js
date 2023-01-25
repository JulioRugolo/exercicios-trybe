const numbers = [19, 21, 30, 3, 45, 22, 15];

// Adicione seu código aqui;

const result = numbers.find((idade) => (idade % 3 ) === 0 && (idade % 5 ) === 0);

console.log(result);

const names = ['João', 'Irene', 'Fernando', 'Maria'];

// Adicione seu código aqui
const namesResult = names.find((tamanho) => tamanho.length === 5);
console.log(namesResult);

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
  // Adicione seu código aqui
  const musicasResult = musicas.find((musica) => musica.id === '31031685');
  console.log(musicasResult);