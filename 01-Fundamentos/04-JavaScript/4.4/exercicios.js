//  1- Usando o objeto abaixo, faça os exercícios a seguir:
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
//console.log('Seja bem vindo(a), ' + info.personagem);

// 2- Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:
info.recorrente = 'Sim';
//console.log(info)

// 3- Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
for(key in info){
    //console.log(key);
}

// 4- Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
for(key in info){
    //console.log(info[key]);
}

// 5- Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:
let info2 = {
    personagem: 'Margarida e Tio Patinhas',
    origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics",
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas',
    recorrente: 'Ambos recorrentes // Atenção para essa última linha!'
  };

  for (key in info2){
    //console.log(key + ': ' + info2[key]);
  }

  // 6- Usando o objeto abaixo, faça os exercícios a seguir:
  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  //console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

  leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  })

  //console.log(leitor.livrosFavoritos);

console.log("Julia tem " + leitor.livrosFavoritos.length + " livros favoritos");
