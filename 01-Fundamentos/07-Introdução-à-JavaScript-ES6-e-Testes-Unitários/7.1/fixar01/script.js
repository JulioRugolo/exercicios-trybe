const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';

const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
    objeto[novaPropriedade] = valor
};

adicionaPropriedade(customer, newKey, lastName);


newKey = 'firstName';
const nome = 'Julio'

adicionaPropriedade(customer, newKey, nome);


newKey = 'lastName';
const sobrenome = 'Rugolo';
adicionaPropriedade(customer, newKey, sobrenome);


newKey = 'email';
const email = 'juliorugolo@gmail.com'
adicionaPropriedade(customer, newKey, email);

newKey = 'job';
const trabalho = 'Estudante';
adicionaPropriedade(customer, newKey, trabalho);


newKey = 'age';
const idade = '31';
adicionaPropriedade(customer, newKey, idade);


newKey = `fullName`;
const nomeCompleto = `${customer.firstName} ${customer.lastName}`;
adicionaPropriedade(customer, newKey, nomeCompleto);


newKey = 'telefone';
const celNumber = '(14) 99164-7966'
adicionaPropriedade(customer, newKey, celNumber);

newKey = 'github';
let novaPropriedade = 'https://www.github.com/julioRugolo'
adicionaPropriedade(customer, newKey, novaPropriedade);

newKey = 'linkedin';
novaPropriedade = 'https://www.linkedin/juliorugolo'
adicionaPropriedade(customer, newKey, novaPropriedade);


console.log(customer);


const student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
  };
  
  const student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom', // chave adicionada
  };
  
  const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for (const index in arrayOfSkills) {
      console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
  };
  
  console.log('Estudante 1');
  listSkills(student1);
  
  console.log('Estudante 2');
  listSkills(student2);

  const student = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskill: 'Ótimo',
  };
  
console.log('-----------------------------------');

const coolestTvShow = {
    name: 'BoJack Horseman',
    genre: 'adult animation',
    createdBy: 'Raphael Bob-Waksberg',
    favoriteCharacter: 'Princess Carolyn',
    quote: 'Princess Carolyn always lands on her feet.',
    seasons: 6,
  };
  
  console.log(Object.values(coolestTvShow));
  
  // [
  //   [ 'name', 'BoJack Horseman' ],
  //   [ 'genre', 'adult animation' ],
  //   [ 'createdBy', 'Raphael Bob-Waksberg' ],
  //   [ 'favoriteCharacter', 'Princess Carolyn' ],
  //   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
  //   [ 'seasons', 6 ]
  // ]
