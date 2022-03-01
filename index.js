const main = document.getElementById("main");
main.remove('main#main')
const newHeader = document.createElement('h1')
newHeader.id = "victory";
newHeader.innerHTML = "Jenn is the champion"
const body = document.querySelector('body')
body.appendChild(newHeader)