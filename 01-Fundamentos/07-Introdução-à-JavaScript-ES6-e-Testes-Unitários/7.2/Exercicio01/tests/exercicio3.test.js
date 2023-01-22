const {mapString, encode, decode } = require('../src/exercicio3');

describe('Testando as funções Encode e Decore', () => {
  it('Testando se a função encode é funcão', () => {
    expect(typeof encode).toBe('function')
  });
  it('Testando se a função decode é função', () => {
    expect(typeof decode).toBe('function')
  });
  it('Testando se a "aeiou" são convertidos para "12345"', () => {
    expect(encode('aeiou')).toBe('12345')
  });
  it('Testando se a "12345" são convertidos para "aeiou"', () => {
    expect(decode('12345')).toBe('aeiou')
  });
  it('Testando se a "oi tudo bem?" são convertidos para "43 t5d4b2m?"', () => {
    expect(encode('oi tudo bem?')).toBe('43 t5d4 b2m?');
  });
  it('Testando se a "43 t5d4b2m?" são convertidos para "oi tudo bem?"', () => {
    expect(decode('43 t5d4 b2m?')).toBe('oi tudo bem?');
  });
  it('Testando se a "oi tudo bem?" são convertidos para "43 t5d4b2m?"', () => {
    expect(encode('oi tudo bem?').length).toBe('43 t5d4 b2m?'.length);
  });
  it('Testando se a "43 t5d4b2m?" tem o mesmo comprimento "oi tudo bem?"', () => {
    expect(decode('43 t5d4 b2m?').length).toBe('oi tudo bem?'.length);
  });
});
