function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

const creating = () => {
  for (let i = 1; i <= input.value; i++) {
    console.log(i);
  }
}

buttonCreate.addEventListener('click', creating)
