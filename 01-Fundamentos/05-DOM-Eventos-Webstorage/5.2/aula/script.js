// arquivo script.js

// Acesse o elemento elementoOndeVoceEsta.
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// Acesse o primeiroFilho a partir de pai.
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
// Agora acesse o terceiroFilho a partir de pai.
// console.log(document.querySelector('#elementoOndeVoceEsta'));

// const pai = document.querySelector('#elementoOndeVoceEsta').parentNode;
// pai.style.backgroundColor = 'red'

// document.querySelector('#primeiroFilhoDoFilho').innerText = 'Mudando texto do elemento Filho do Filho'

// console.log(pai.firstElementChild);
// console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);
// console.log(document.querySelector('#pai').lastElementChild.previousElementSibling);

// const createElement = document.getElementById('pai');

// function createChild(text) {
//     const createTag = document.createElement('h1');
//     createTag.innerHTML = text;
//     createElement.appendChild(createTag);
// } 

// createChild('adicionando irmão para elementoOndeVoceEsta');

// const createElementFilho = document.getElementById('elementoOndeVoceEsta');

// function createChild(text) {
//     const createTag = document.createElement('h2');
//     createTag.innerHTML = text;
//     createElement.appendChild(createTag);
// } 

// createChild('adicionando filho para elementoOndeVoceEsta');

// const createElementPrimeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');

// function createChild(text) {
//     const createTag = document.createElement('h2');
//     createTag.innerHTML = text;
//     createElement.appendChild(createTag);
// } 

// createChild('adicionando filho para primeiroFilhoDoFilho');

const removeElement = document.getElementById('elementoOndeVoceEsta');
const removeElementChild = document.getElementById('h2-filho')
removeElement.removeChild(removeElementChild)