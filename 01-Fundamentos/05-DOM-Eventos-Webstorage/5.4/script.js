window.onload = () => {
    let locaBackgroundColor = localStorage.getItem('BackgroundColor');
    elementColor.style.backgroundColor = locaBackgroundColor;
    let localFontColor = localStorage.getItem('fontColor');
    elementColor.style.color = localFontColor;
}

const elementColor = document.getElementById('content');

/* ------------- BOTOES BG COLOR */
const bgWhite = document.getElementById('corBgWhite');
const bgBlack = document.getElementById('corBgBlack');
const bgGreen = document.getElementById('corBgGreen');
const bgBlue = document.getElementById('corBgBlue');
const bgYellow = document.getElementById('corBgYellow');

function whiteClick(e) {
    elementColor.style.backgroundColor = e.target.innerHTML;
    localStorage.setItem('BackgroundColor', e.target.innerHTML);
}

bgWhite.addEventListener('click', whiteClick);
bgBlack.addEventListener('click', whiteClick);
bgGreen.addEventListener('click', whiteClick);
bgBlue.addEventListener('click', whiteClick);
bgYellow.addEventListener('click', whiteClick);
/* ---------------------------------------------------- */

/* -------------- FONT COLOR -------------------------- */
const fontButton = document.getElementsByClassName('fontColor')[0].lastElementChild.children;

function fontColorClick(e) {
    elementColor.style.color = e.target.innerHTML;
    localStorage.setItem('fontColor', e.target.innerHTML);
}

for (let index = 0; index < fontButton.length; index++) {
    fontButton[index].addEventListener('click', fontColorClick);
}