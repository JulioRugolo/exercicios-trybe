const createItem = require('./createItem');

describe('a função createItem', () => {
  it('cria um item válido', () => {
    expect(createItem('iPhone', 'R$', 1000, 10)).toEqual({name: 'iPhone', quantity:10, unit:'R$', price:1000});
  });
  it('utiliza zero como quantidade padrão', () => {
    expect(createItem('iPhone', 'R$', 1000, )).toEqual({name: 'iPhone', quantity:0, unit:'R$', price:1000});
});
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow()
});
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem(iPhone, 'R$', 1000, 10)).toThrow();
  });
  it('Lança um erro se o preço é negativo', () => {
    expect(() => createItem('iPhone', 'R$', -1000, 10)).toThrow();
  });
  it('Lança um erro se o preço é zero', () =>{
    expect(() => createItem('iPhone', 'R$', 0, 10)).toThrow();
  });
});