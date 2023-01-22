const { info, printMessage } = require('../src/exercicio2')

describe('Testando a função printMessage', () => {
    it('Testando se o parâmetro de printMessage possui personagem', () => {
        expect(info).toHaveProperty('personagem');
    })
    it('Testando se o retorno contem o texto "Boas vindas,"', () => {
        expect(printMessage(info)).toContain('Boas vindas,');
    })
})