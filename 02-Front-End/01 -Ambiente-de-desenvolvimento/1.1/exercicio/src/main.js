import isEmail from 'validator/lib/isEmail';

const input = document.getElementById('input');
const button = document.getElementById('button');
const paragraph = document.getElementById('result');

button.addEventListener('click', (event) => {
  if (isEmail(input.value)) {
    const result = paragraph;
    result.innerText = 'A validação retornou true';
    event.preventDefault();
    return result;
  }

  event.preventDefault();
  const result = paragraph;
  result.innerHTML = 'A validação retornou false';
  return result;
});
