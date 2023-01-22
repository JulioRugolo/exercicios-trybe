const myFizzBuzz = require('../src/exercicio2');

describe('testa a função myFizzBuzz', () => {
    it('verifica, se de acordo com o parâmetro recebido, retorna o valor esperado', () => {
      expect(myFizzBuzz(15)).toBe('fizzbuzz');
      expect(myFizzBuzz(3)).toBe('fizz');
      expect(myFizzBuzz(5)).toBe('buzz');
      expect(myFizzBuzz(1)).toBe(1);
      expect(myFizzBuzz('2')).toBe(false);
    });
  });