const searchEmployee = require('../src/bonus')

describe('Testando quadro de funcionarios', () => {
    it('Testando se a função existe', () => {
        expect(searchEmployee).toBeDefined()
    });
    it('Testando se searchEmployee é uma função', () => {
        expect(typeof searchEmployee).toBe('function');
    });
    it('Testando se searchEmployee retorna funcionario', () => {
        expect(searchEmployee('4456-4', 'Ana')).toEqual({
            id: '4456-4',
            firstName: 'Leila',
            lastName: 'Zuckerberg',
            specialities: [ 'Context API', 'RTL', 'Bootstrap' ]
          });
    });
    it('Testando se searchEmployee retorna funcionario', () => {
        expect(searchEmployee('4452-4', 'Ana')).toEqual('ID não identificada');
    });
})