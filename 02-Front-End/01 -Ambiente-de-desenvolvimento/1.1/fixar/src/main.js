import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';

const randomPassword = nanoid();
const button = document.getElementById('button');
const h2 = document.getElementById('h2');

button.addEventListener('click', () => {
  h2.innerHTML = nanoid();
  copy(h2.innerHTML);
  alert('Senha copiada!');
});

h2.addEventListener('click', (event) => {
  copy(event.target.innerHTML);
  alert('Senha copiada!');
});
console.log(randomPassword);
