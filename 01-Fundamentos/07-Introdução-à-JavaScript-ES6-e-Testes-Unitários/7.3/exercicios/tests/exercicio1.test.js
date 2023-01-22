const sum = require('../src/exercicio1')

describe('Testando a função SUM', () => {
    it('Testando se o retorno de 4 e 5 é 9', () => {
        expect(sum(4, 5)).toBe(9);
    });
    it('Testando se o retorno de 0 e 0 é 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
    it('Testando se o retorno é um erro quando for uma string', () => {
        expect(() => sum('0', '0')).toThrow();
    });
    it('Testando se o retorno é "parameters must be numbers"', () => {
        expect(() => sum('0', '0')).toThrow('parameters must be numbers');
    });
})