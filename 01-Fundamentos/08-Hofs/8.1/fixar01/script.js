// O email ${email} está cadastrado em nosso banco de dados!

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

// Adicione seu código aqui
const mensagem = (email) => console.log(`O email ${email} está cadastrado em nosso banco de dados!`);

emailListInData.forEach((item) => {
mensagem(item);
})