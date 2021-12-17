const balls = document.querySelectorAll('.ball');
const container = document.getElementById('container');
const p = document.getElementById('rgb-color');
const resetButton = document.getElementById('reset-game');
const answer = document.getElementById('answer');
const placar = document.getElementById('score');

function generateColor() {
  for (let i = 0; i < balls.length; i += 1) {
    const rgb1 = Math.floor(Math.random() * 256);
    const rgb2 = Math.floor(Math.random() * 256);
    const rgb3 = Math.floor(Math.random() * 256);
    balls[i].style.backgroundColor = 'rgb(' + rgb1 + ',' + rgb2 + ',' + rgb3 + ')';
  }
}
function rgbText() {
  const textRgb = Math.floor(Math.random() * 6);
  p.innerHTML = balls[textRgb].style.backgroundColor;
}
function reset() {
  generateColor();
  rgbText();
  answer.innerHTML = 'Escolha uma cor';
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.border = '1px solid black';
  }
}
function selectColor(event) {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.border = '1px solid black';
  }
  event.target.style.border = '3px solid black';
  if (event.target.style.backgroundColor === p.innerHTML) {
    answer.innerHTML = 'Acertou!';
    const result = parseInt(placar.innerText) + 3;
    placar.innerHTML = result;
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
    if (placar.innerHTML > '0') {
      const result = parseInt(placar.innerText) - 1;
      placar.innerHTML = result;
    }
  }
}
container.addEventListener('click', selectColor);
resetButton.addEventListener('click', reset);
window.onload = (generateColor(), rgbText(), answer.innerHTML = 'Escolha uma cor');
