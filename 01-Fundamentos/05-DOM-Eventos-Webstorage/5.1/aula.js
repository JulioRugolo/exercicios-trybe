document.getElementById("paragraph");
      paragraph.style.color = "red";

document.getElementById("page-title").innerText = "Mudando o titulo com getElementById"

document.getElementById("second-paragraph").innerText = "Mudando o segundo parágrafo com getElementById"

document.getElementById("subtitle").innerText = "Mudando o subtítulo com getElementById"

let paragraphs = document.getElementsByClassName('paragraphs');

for (let index = 0; index < paragraphs.length; index++) {
    paragraphs[index].innerText = "alterando paragrafos com getElemensByClassName";
    paragraphs[index].style.color = "green";    
}
let getClass = document.getElementsByTagName("h4");
for (let index = 0; index < getClass.length; index++) {
      getClass[index].style.color = "red";
    
}