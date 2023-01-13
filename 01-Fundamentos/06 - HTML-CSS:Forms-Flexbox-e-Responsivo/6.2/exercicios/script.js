
const submitButton = document.getElementById('submit-button');
const submitFoto = document.getElementById('input-foto');
const maxInputAbout = document.getElementById('input-about').value.length;
const maxInputEmail = document.getElementById('input-email').value.length;
const maxInputNome = document.getElementById('input-nome').value.length;
const inputNome = document.getElementById('input-nome');
const inputEmail = document.getElementById('input-email');
const inputSobrenome = document.getElementById('sobrenome');
const picker2 = new Pikaday({ field: document.getElementById('input-date') });
let nome = '';
let email = '';
let sobrenome = '';

inputEmail.addEventListener('input', () => {
    email = inputEmail.value
})

inputSobrenome.addEventListener('input', () => {
    sobrenome = inputSobrenome.value
})

function valiteInputs() {
    if (nome.length > 0 && email.length > 0 && sobrenome.length > 0) {
        submitButton.disabled = false
    }
}

document.body.addEventListener('click', valiteInputs)

function validadeTerms() {
    if (submitFoto.checked === true) {
        alert('Informações enviadas')
    } else if (submitFoto.checked === false){
        alert('Para enviar suas informações voc6e precisa concordar com os termos!')
    }   
}

submitButton.addEventListener('click', (event) => {
    if (maxInputAbout < 500 && maxInputEmail < 50 && maxInputNome < 40 ) {
        if (submitFoto.checked === true) {
            alert(`Obrigado ${nome}, por participar do concurso TrybeTrip! Dados enviados com sucesso!`)
            
        } else if (submitFoto.checked === false){
            event.preventDefault();
            alert('Para enviar suas informações você precisa concordar com os termos!')
        } 
    } else {
        event.preventDefault();
        alert('Dados Inválidos');
    }
});

const picker = new Pikaday({
    field: document.getElementById('date'),
    format: 'D/M/YYYY',
    toString(date, format) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
    parse(dateString, format) {
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }
  });